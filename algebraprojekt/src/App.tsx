import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NoMatch from "./pages/no-match";
import Charmander from "./pages/charmander";
import Germany from "./pages/germany";
import ProfileMaker from "./pages/profile-maker";
import Pokemon from "./pages/pokemon";
import Vjezbe from "./pages/vjezbe";
import DataTypes from "./pages/data-types";
import Pokemons from "./pages/pokemons";
import Flags from "./pages/flags";
import Gallery from "./pages/gallery";
import Tabs from "./pages/tabs";
import Games from "./pages/games";
import GameInfo from "./pages/gameInfo";
import Series from "./pages/series";
import SeriesInfo from "./pages/seriesInfo";
import Cars from "./pages/cars";
import Glovo from "./pages/glovo";
import Zadaci from "./pages/zadaci";
import Phones from "./pages/phones";
import PhonesCreate from "./pages/phones-create";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Charmander" element={<Charmander />} />
          <Route path="cars" element={<Cars />} />
          <Route path="Tabs" element={<Tabs />} />
          <Route path="Series">
            <Route index element={<Series />} />
            <Route path=":showId" element={<SeriesInfo />} />
          </Route>
          <Route path="games">
            <Route index element={<Games />} />
            <Route path=":gameId" element={<GameInfo />} />
          </Route>
          <Route path="Germany" element={<Germany />} />
          <Route path="glovo" element={<Glovo />} />
          <Route path="Pokemon" element={<Pokemon />} />
          <Route path="vjezbe" element={<Vjezbe />} />{" "}
          <Route path="phones">
            <Route index element={<Phones />} />
            <Route path="new" element={<PhonesCreate />} />
          </Route>
          <Route path="data-types" element={<DataTypes />} />
          <Route path="profile-maker" element={<ProfileMaker />} />
          <Route path="pokemons" element={<Pokemons />}>
            <Route path="history" element={"History"} />
          </Route>
          <Route path="gallery" element={<Gallery />} />
          <Route path="flags" element={<Flags />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </> //za filtriranje najbolje funkciju
    //buttone vjezbat kad kliknes da ti filtrira podatke npr samo crvene izbaci
  );
};

export default App;
