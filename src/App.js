import { useState, useEffect } from "react";
import Header from "./components/header";
//import Sidebar from "./components/Sidebar";
import Maincontent from "./components/maincontent";


function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState('');

  const getTopAnime = async () => {
    const res = await fetch (`https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=13`)
    const resData = await res.json()
      SetTopAnime(resData.data);
  }

  const HandleSearch = e => {
    e.preventDefault();

    FetchAnime(search)
  }

  const FetchAnime = async (query) => {
    const res = await fetch (`https://api.jikan.moe/v4/anime?q=${query}`)
    const resData = await res.json()
    console.log(resData.data);
    SetAnimeList(resData.data);
  }

  useEffect (() => {
    getTopAnime();
  }, []);

  

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Maincontent
            HandleSearch={HandleSearch}
            search={search}
            SetSearch={SetSearch}
            animeList={animeList} />     
      </div>
    </div>
  );
}

export default App;
