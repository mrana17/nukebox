export type APISong = {
  id: string;
  imgSrc: string;
  title: string;
  interpret: string;
};

export async function getSongs() {
  const response = await fetch("/api/songs");
  const songs: APISong[] = await response.json();
  return songs;
}

// alternative with .then chaining
// export function getSongs() {
//     return fetch ("/api/songs")
//     .then((response) => response.json())
//     .then(( songs: APISong[]) => songs);
// }

export async function getSong(id) {
  const response = await fetch(`/api/songs/${id}`);
  const song: APISong = await response.json();
  return song;
}
