import { connection } from "@/tools/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try{
        const [result, fields] = await connection.query("SELECT * FROM genre;");
        return NextResponse.json(result);
    } catch(err){
        return NextResponse.json(err);
    }
}