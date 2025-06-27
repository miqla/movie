import { useNav } from "../components/UseNav";

export function Favorite() {
  const { nav, query } = useNav();
  return (
    <>
      {nav()}
      <h1>Halaman Favorite</h1>
    </>
  );
}
