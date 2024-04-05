import { useState } from "react";
import ChatImg from "../assets/chat.svg";
import GalleryImg from "../assets/gallery.svg";
import FollowImg from "../assets/follow.svg";
import Slider from "../components/slider"; // Import Slider component
import Insta from "../assets/insta.svg";
import Mail from "../assets/mail.svg";
import Spotify from "../assets/spotify.svg";
type MyInfo = {
  url: string;
  name: string;
  surename: string;
  email: string;
  hobbies: string[];
  awards: string;
  insta: string;
  spotify: string;
  facebook: string;
  location: string;
};

const Info: MyInfo = {
  url: "https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601_640.jpg",
  name: "Marin",
  surename: "Šimunović",
  email: "3simunovic.marin@gmail.com",
  hobbies: [
    "guitar playing: Warm-up with scales (10 mins), practice chord changes (10 mins), work on a new technique or song (15 mins), focus on rhythm exercises (10 mins), end with cool-down improvisation (5 mins).",
    "reading: Warm-up with sight-reading exercises (10 mins), practice reading rhythms (10 mins), work on a new piece or section (15 mins), focus on dynamics and expression (10 mins), end with sight-reading a new piece (5 mins).",
    "hiking: Warm-up with stretches (5 mins), start with a moderate incline (30 mins), increase pace on flat terrain (20 mins), enjoy a scenic view or rest (10 mins), descend with focus on balance (25 mins), cool-down stretches (10 mins).",
  ],
  awards: "none",
  insta: "marin.simunovic2",
  spotify: "msimunovic",
  facebook: "Marin Šimunović",
  location: "Čepin, Croatia",
};

const Home = () => {
  const [data] = useState<MyInfo>(Info);

  return (
    <>
      <div className="user-profile">
        <div className="user-links">
          {" "}
          <div className="user-actions">
            <img className="user-img" src={ChatImg} alt="" />

            <img className="user-img" src={GalleryImg} alt="" />

            <img className="user-img" src={FollowImg} alt="" />
          </div>
        </div>
        <div className="user-info">
          {" "}
          <img
            className="user-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYS_AWd0LAIhWutPb2Vx8Fm8MXEsSf1pcaA&s"
            alt="img"
          />
          <div className="username">
            {data.name} {data.surename}
          </div>
          <div className="location">{data.location}</div>
        </div>
        <div className="user-hobbies">
          <h3>My routines</h3>
          {data.hobbies.map((hobby, index) => (
            <div className="hobbies" key={index}>
              <li>{hobby}</li>
            </div>
          ))}
        </div>
        <div className="user-details">
          <div className="user-details-box">
            <img className="user-images" src={Mail} alt="" />
            <div className="user-details-value-top">{data.email}</div>

            <img className="user-images" src={Insta} alt="" />
            <div className="user-details-value">{data.insta}</div>
          </div>
          <div className="user-details-box">
            <img className="user-images" src={FollowImg} alt="" />
            <div className="user-details-value-top">{data.facebook}</div>

            <img className="user-images" src={Spotify} alt="" />
            <div className="user-details-value">{data.spotify}</div>
          </div>
        </div>
        <div className="user-languages">
          languages: <div className="user-languages-english">English</div>
          <Slider />
        </div>
      </div>
    </>
  );
};

export default Home;
