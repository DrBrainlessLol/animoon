import React from "react";
import Home from "@/app/home/Home";

export default async function Page() {
  const ShareUrl = "https://animoon.me/";

  // Function to fetch data with cache and revalidation
  async function fetchDataWithCache(url) {
    const response = await fetch(url, {
      cache: "force-cache", // Forces the cache to be used
      next: { revalidate: 3600 },
    });

    const data = await response.json();
    return data;
  }

  // Fetch and cache data from the API routes
  const data = await fetchDataWithCache(
    "https://hianimes.vercel.app/anime/home"
  );
  const dataNew = await fetchDataWithCache(
    "https://hianimes.vercel.app/anime/recently-added?page=1"
  );
  const dataComp = await fetchDataWithCache(
    "https://hianimes.vercel.app/anime/completed?page=1"
  );
  const dataFav = await fetchDataWithCache(
    "https://hianimes.vercel.app/anime/most-favorite?page=1"
  );
  const dataPopu = await fetchDataWithCache(
    "https://hianimes.vercel.app/anime/most-popular?page=1"
  );
  const dataAir = await fetchDataWithCache(
    "https://hianimes.vercel.app/anime/top-airing?page=1"
  );
  return (
    <div>
      <Home
        data={data}
        ShareUrl={ShareUrl}
        dataNew={dataNew}
        dataComp={dataComp}
        dataAir={dataAir}
        dataFav={dataFav}
        dataPopu={dataPopu}
      />
    </div>
  );
}
