import { useState } from "react";
import MovieRender from "../components/movie-render";

type tabType = { id: string; label: string };

const tabData: tabType[] = [
  { id: "1", label: "Batman" },
  { id: "2", label: "Batman2" },
  { id: "3", label: "Spiderman" },
  { id: "4", label: "Spiderman2" },
];

export type MovieType = {
  name: string;
  year: string;
  genre: string[];
  id: string;
  img: string;
  about: string;
};
export type ActorType = {
  id: string;
  name: string;
  realname: string;
  img: string;
};
const actorsData: ActorType[] = [
  {
    id: "1",
    name: "Peter Parker",
    realname: "Tom Holland",
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS0BoHXyTC6fiXdFd39tpPeIOMlurZorAPiD6QJwS2yZVzFQGKQq_padu4AaV6Rug9qf35tExpQkObaYLY",
  },
  {
    id: "2",
    name: "MJ",
    realname: "Zendeya",
    img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQr9Rwnt5cPm2LgjHb0X0sZoNPevVduHl_24piDSc2M_1o3BfpybN0WxDVH2etKPYN7Cs985BHEtAtHcSU",
  },
];

const movieData: MovieType[] = [
  {
    id: "1",
    name: "Batman",
    year: "2022",
    genre: ["action"],
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/The_Batman_%28film%29_poster.jpg/220px-The_Batman_%28film%29_poster.jpg",
    about:
      "Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past",
  },
  {
    id: "2",
    name: "Batman2",
    year: "2024",
    genre: ["action", "detective"],
    img: "https://static0.moviewebimages.com/wordpress/wp-content/uploads/2022/02/TheBatman2.jpeg",
    about:
      "Robert Pattinson will return to star in the sequel, which was originally set to hit theaters in October 2025 but was delayed due to stalled script development during the 2023 Hollywood strikes, TheWrap has learned. “The Batman 2” will open in the early October slot that has been a boon to Warner Bros.",
  },
  {
    id: "3",
    name: "Spiderman",
    year: "2022",
    genre: ["action", "sci-fi"],
    img: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png",
    about:
      "It stars Tom Holland as Peter Parker / Spider-Man alongside Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield, and Tobey Maguire.",
  },
  {
    id: "4",
    name: "Spiderman2",
    year: "2024",
    genre: ["action", "sci-fi"],
    img: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
    about:
      "In an attempt to curb the Spot, a scientist, from harnessing the power of the multiverse, Miles Morales joins forces with Gwen Stacy.",
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<tabType>(tabData[0]);
  return (
    <>
      <div className="tab">
        {tabData.map((tab) => {
          return (
            <div
              key={tab.id}
              className={`tab__item ${tab.id === activeTab.id ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab);
              }}
            >
              {tab.label}
            </div>
          );
        })}
      </div>

      <div className="tab__content">
        <MovieRender
          //find moze vratit undefined moram pazit na to
          movie={movieData.find((movie) => {
            return activeTab.id === movie.id;
          })}
        />
      </div>
    </>
  );
};

export default Tabs;
