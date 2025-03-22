import AnimeCollection from "./AnimeCollection";

import MainSidebar from "./MainSidebar";

export default function MainContainer(props) {

  // categories -> "most-favorite", "most-popular", "subbed-anime", "dubbed-anime", "recently-updated", "recently-added", "top-upcoming", "top-airing", "movie", "special", "ova", "ona", "tv", "completed"

  return (
    <div className="main-container d-flex">
        <>
          <div className="sidebar-wrapper">
            <MainSidebar
              data={props.data}
              IsLoading={props.IsLoading}
            />
          </div>
          <div className="collections-wrapper d-flex-fd-column a-center ">
            <AnimeCollection
              collectionName="Latest Episodes"
              data={props.data.latestEpisodeAnimes?.slice(0, 12)}
              filterName="recently-updated"
              IsLoading={props.IsLoading}
            />
            <AnimeCollection
              collectionName="New on Shizuru"
              data={props.dataNew.animes?.slice(0, 12)}
              filterName="recently-added"
              IsLoading={props.IsLoading}
            />
            <AnimeCollection
              collectionName="Top Upcoming"
              data={props.data.topUpcomingAnimes?.slice(0, 12)}
              filterName="top-upcoming"
              IsLoading={props.IsLoading}
            />
          </div>
        </>
    </div>
  );
}
