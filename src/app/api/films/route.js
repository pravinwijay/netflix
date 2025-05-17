import { getConnection } from "@/tools/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try{
        const connection = await getConnection();
        const [result, fields] = await connection.query("SELECT * FROM film;");
        return NextResponse.json(result);
    } catch(err){
        return NextResponse.json(err);
    }
}