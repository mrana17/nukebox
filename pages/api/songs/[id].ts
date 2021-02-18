// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../server/db.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const song = db.songs.find((song) => song.id === id);
  if (!song) {
    return res.status(404).json({
      status: 404,
      error: "song not found",
    });
  }
  res.status(200).json(song);
};
