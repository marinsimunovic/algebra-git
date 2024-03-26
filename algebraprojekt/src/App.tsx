import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NoMatch from "./pages/no-match";
import Charmander from "./pages/charmander";
import Germany from "./pages/germany";
import ProfileMaker from "./pages/profile-maker";
import Pokemon from "./pages/pokemon";

const App = () => {
  //tu dodajem rute i ond ih u nav dodajemo u array
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Germany" element={<Germany />} />
          <Route path="Charmander" element={<Charmander />} />

          <Route path="Pokemon" element={<Pokemon />}>
            <Route path="profile-maker" element={<ProfileMaker />} />
            <Route path="history" element={"History"} />
          </Route>
          <Route path="contact" element={<Contact />} />
          {/* Using path="*" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
