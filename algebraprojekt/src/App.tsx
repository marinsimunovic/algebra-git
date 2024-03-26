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
import Vjezbe from "./pages/vjezbe";
import DataTypes from "./pages/data-types";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Germany" element={<Germany />} />
          <Route path="vjezbe" element={<Vjezbe />} />
          <Route path="Charmander" element={<Charmander />} />
          <Route path="Pokemon" element={<Pokemon />}>
            <Route index element={<ProfileMaker />} />
            <Route path="data-types" element={<DataTypes />} />
            <Route path="about" element={<About />}>
              <Route path="history" element={"History"} />
            </Route>
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
