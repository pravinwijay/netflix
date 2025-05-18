import { getConnection } from "@/tools/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try{
        const connection = await getConnection();
        const [result, fields] = await connection.query("SELECT film.nom, film.description, film.affiche, genre.libelle AS genre FROM film JOIN genre ON genre.id_genre = film.id_genre;");
        return NextResponse.json(result);
    } catch(err){
        return NextResponse.json(err);
    }
}