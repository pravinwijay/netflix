import { getConnection } from "@/tools/database"; 
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const connection = await getConnection(); 
    const [result] = await connection.query("SELECT * FROM genre;");
    return NextResponse.json(result); 
  } catch (err) {
    console.error("Erreur API genre :", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};