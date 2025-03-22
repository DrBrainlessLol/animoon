import "./page.css";
import errorP from "../../../public/error.gif";
import Image from "next/image";

export async function generateMetadata() {
  const idd = "Anime";

  return {
    title: `Watch ${idd} English Sub/Dub online free on Animoon.me , free Anime Streaming`,
    description: `Shizuru is the best site to watch
                      ${idd} SUB online, or you can even
                      watch ${idd} DUB in HD quality. You
                      can also watch under rated anime
                      on Shizuru website.`,
  };
}

export default function Error() {
  return (
    <div
      style={{ marginTop: "65px" }}
      className="gogoanime-error d-flex-fd-column a-center j-center"
    >
      <Image className="imago" src={errorP} alt="error" />
      <h2 className="hji">Page is under Construction ...</h2>
    </div>
  );
}
