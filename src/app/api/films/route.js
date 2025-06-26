import { getConnection } from "@/tools/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const connection = await getConnection();
    const [result, fields] = await connection.query("SELECT film.id_film AS id, film.nom, film.description, film.affiche, genre.libelle AS genre FROM film JOIN genre ON genre.id_genre = film.id_genre;");
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(err);
  }
}

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { nom, description, affiche, genre } = body;

    const connection = await getConnection();
    const [result] = await connection.execute(
      "INSERT INTO film (nom, description, affiche, id_genre) VALUES (?, ?, ?, ?)",
      [nom, description, affiche, genre]
    );

    return NextResponse.json({ message: "Film ajouté", id: result.insertId });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};

export const PUT = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const body = await request.json();
    const { nom, description, affiche, genre } = body;

    const connection = await getConnection();
    await connection.execute(
      "UPDATE film SET nom = ?, description = ?, affiche = ?, id_genre = ? WHERE id_film = ?",
      [nom, description, affiche, genre, id]
    );

    return NextResponse.json({ message: "Film mis à jour" });
  } catch (err) {
    console.error("Erreur PUT :", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};

export const DELETE = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID manquant" }, { status: 400 });
    }

    const connection = await getConnection();
    await connection.execute("DELETE FROM film WHERE id_film = ?", [id]);

    return NextResponse.json({ message: "Film supprimé" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};