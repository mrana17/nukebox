export type APISong = {
  id: string;
  imgSrc: string;
  title: string;
  interpret: string;
  audio: string;
};

async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getSongs(): Promise<APISong[]> {
  return fetchURL<APISong[]>("/api/songs");
}

export async function getSong(id: string): Promise<APISong> {
  return await fetchURL<APISong>(`/api/songs/${id}`);
}
