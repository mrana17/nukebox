// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { readDb, writeDb } from "../../../server/db";
import { APISong } from "../../../utils/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    handleGET(req, res);
  }
  if (req.method === "POST") {
    handlePOST(req, res);
  }
};
async function handleGET(req: NextApiRequest, res: NextApiResponse) {
  const db = await readDb();
  res.status(200).json(db.songs);
}

async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  const newSong: APISong = req.body;
  const db = await readDb();
  const songExists = db.songs.some((song) => song.id === newSong.id);
  if (songExists) {
    res.status(409).json({
      status: 409,
      error: `Song ${newSong.id} already exists`,
    });
  }
  // db.songs.push(song)
  db.songs = [...db.songs, newSong];
  await writeDb(db);
  res.status(201).json(newSong);
}
