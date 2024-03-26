import { navigationData } from "../data/nav";
import Navigation from "./navigation";

const Header = () => {
  return (
    <div className="header__wrapper">
      <header className="header">
        <Navigation links={navigationData} />
      </header>
    </div>
  );
};
export default Header;
