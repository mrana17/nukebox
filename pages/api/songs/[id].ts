// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { readDb, writeDb } from "../../../server/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (req.method === "GET") {
    const db = await readDb();
    const song = db.songs.find((song) => song.id === id);
    if (!song) {
      return res.status(404).json({
        status: 404,
        error: "Song not found",
      });
    }
    res.status(200).json(song);
  }
  if (req.method === "DELETE") {
    const db = await readDb();
    db.songs = db.songs.filter((song) => song.id !== id);
    await writeDb(db);
    return res.status(200).json({
      status: 200,
      message: `${id} deleted`,
    });
  }
  return res.status(405).end();
};
