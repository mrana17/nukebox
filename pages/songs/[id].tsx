import { useRouter } from "next.Router";

export default function Songs() {
  const router = useRouter();
  const { id } = router.query;

  return <div>HAllO {id}</div>;
}
