import GenreSidebar from "@/app/Gridle/page";
import React from "react";

export async function generateMetadata({ searchParams }) {
  const idd = searchParams.name || "Anime"; // Default fallback for name

  return {
    title: `Watch ${idd} Anime English Sub/Dub online free on Shizuru.app`,
    description: `Shizuru is the best site to watch ${idd} Anime SUB online, or you can even watch ${idd} Anime DUB in HD quality. You can also watch underrated anime on Shizuru website.`,
  };
}

export default async function page({ searchParams }) {
  const cate = searchParams.name?.toString() || 'default-category'; // Ensure cate has a value
  const date = cate
    .replaceAll(" ", "-")
    .toLocaleLowerCase()
    .replace(/[^a-zA-Z0-9\-]/g, ""); // Clean up the category name for URL

  const pageParam = searchParams.page ? searchParams.page : '1';
  const cacheMaxAge = 345600; // Cache for 4 days (in seconds)

  try {
    // Fetch genre-specific anime list and homepage data concurrently
    const [animeResp, homeResp] = await Promise.all([
      fetch(`https://hianimes.animoon.me/anime/genre/${date}?page=${pageParam}`, {
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
      throw new Error("Failed to fetch data.");
    }

    const data = await animeResp.json();
    const datal = await homeResp.json();

    // Constructing the shareable URL
    const ShareUrl = `https://animoon.me/genre?id=${cate}&name=${cate}`;
    const arise = `${cate} Anime`;

    return (
      <div>
        <GenreSidebar
          data={data}
          name={cate}
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
