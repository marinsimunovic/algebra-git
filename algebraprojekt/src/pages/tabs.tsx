import { useState } from "react";
import MovieRender from "../components/movie-render";
import { movieData, tabData } from "../data/movie";
import { TabType } from "../types/main";
import Arrow from "../assets/arrow.svg";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>(tabData[0]);
  return (
    <>
      <div className="page">
        {" "}
        <a href="/vjezbe">
          <img className="back" src={Arrow} alt="arrow" />
        </a>
        <div className="tab__content">
          <MovieRender
            //find moze vratit undefined moram pazit na to
            movie={movieData.find((movie) => {
              return activeTab.id === movie.id;
            })}
          />
        </div>
        <div className="tab">
          {tabData.map((tab) => {
            return (
              <div
                key={tab.id}
                className={`tab__item ${
                  tab.id === activeTab.id ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab(tab);
                }}
              >
                {tab.label}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tabs;
