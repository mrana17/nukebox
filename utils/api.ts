export type APISong = {
  id: string;
  imgSrc: string;
  title: string;
  interpret: string;
  audio: string;
};

export async function getSongs() {
  const response = await fetch("/api/songs");
  const songs: APISong[] = await response.json();
  return songs;
}

export async function getSong(id) {
  const response = await fetch(`/api/songs/${id}`);
  const song: APISong = await response.json();
  return song;
}
