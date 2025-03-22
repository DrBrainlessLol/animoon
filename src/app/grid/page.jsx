import GenreSidebar from "@/app/Gridle/page";
import React from "react";

export async function generateMetadata({ searchParams }) {
  const idd = searchParams.heading;

  return {
    title: `Watch ${idd} Anime English Sub/Dub online free on Shizuru.app`,
    description: `Animoon is the best site to watch ${idd} Anime SUB online, or you can even watch ${idd} Anime DUB in HD quality. You can also watch under rated anime on Animoon website.`,
  };
}

export default async function page({ searchParams }) {
  const cate = searchParams.name?.toString() || 'default-category'; // Default value fallback
  const fiki = searchParams.heading?.toString() || 'Anime'; // Default fallback
  const pageParam = searchParams.page ? searchParams.page : '1';
  const cacheMaxAge = 345600; // Cache for 4 days (in seconds)

  try {
    // Fetch data for category-specific anime list
    const [animeResp, homeResp] = await Promise.all([
      fetch(`https://hianimes.animoon.me/anime/${cate}?page=${pageParam}`, {
        cache: 'force-cache',
        headers: {
          'Cache-Control': `public, max-age=${cacheMaxAge}, stale-while-revalidate=${cacheMaxAge}`,
        },
      }),
      fetch("https://hianimes.animoon.me/anime/home", {
        cache: 'force-cache',
        headers: {
          'Cache-Control': `public, max-age=${cacheMaxAge}, stale-while-revalidate=${cacheMaxAge}`,
        },
      }),
    ]);

    if (!animeResp.ok || !homeResp.ok) {
      throw new Error('Failed to fetch data.');
    }

    const data = await animeResp.json();
    const datal = await homeResp.json();

    // Constructing the shareable URL
    const ShareUrl = `https://animoon.me/grid?name=${cate}&heading=${fiki}`;
    const arise = `${fiki} Anime`;

    return (
      <div>
        <GenreSidebar
          data={data}
          fiki={fiki}
          cate={cate}
          datal={datal}
          ShareUrl={ShareUrl}
          page={pageParam}
          arise={arise}
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data: ", error);
    return <div>Error loading data. Please try again later.</div>;
  }
}
