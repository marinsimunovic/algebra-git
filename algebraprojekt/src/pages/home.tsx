import { useState } from "react";
import ChatImg from "../assets/chat.svg";
import GalleryImg from "../assets/gallery.svg";
import FollowImg from "../assets/follow.svg";
import Slider from "../components/slider"; // Import Slider component
import Button from "../components/button";
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
  url: "https://instagram.fzag4-1.fna.fbcdn.net/v/t51.2885-19/382536270_796768882457281_2666743802291451333_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fzag4-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=FpbZrDOoVdcAb5JvGwo&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBk17ygKaVJbAGg6_qiOwVXnkZPeO2caoqg6h_kdc3rTw&oe=661A1D66&_nc_sid=8b3546",
  name: "Marin",
  surename: "Šimunović",
  email: "3simunovic.marin@gmail.com",
  hobbies: [
    "guitar playing: Warm-up with scales (10 mins), practice chord changes (10 mins), work on a new technique or song (15 mins), focus on rhythm exercises (10 mins), end with cool-down improvisation (5 mins).",
    "reading: Warm-up with sight-reading exercises (10 mins), practice reading rhythms (10 mins), work on a new piece or section (15 mins), focus on dynamics and expression (10 mins), end with sight-reading a new piece (5 mins).",
    "hiking: Warm-up with stretches (5 mins), start with a moderate incline (30 mins), increase pace on flat terrain (20 mins), enjoy a scenic view or rest (10 mins), descend with focus on balance (25 mins), cool-down stretches (10 mins).",
  ],
  awards: "none",
  insta: "marinsimunovic2",
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
          <div className="user-actions">
            <Button>
              <img className="user-img" src={ChatImg} alt="" />
            </Button>

            <Button>
              <img className="user-img" src={GalleryImg} alt="" />
            </Button>

            <Button>
              <img className="user-img" src={FollowImg} alt="" />
            </Button>
          </div>
        </div>
        <div className="user-info">
          {" "}
          <img className="user-image" src={data.url} alt="img" />
          <div className="username">
            {data.name} {data.surename}
          </div>
          <div className="location">{data.location}</div>
        </div>
        <div className="user-cards">
          {" "}
          <div className="user-hobbies">
            <h3>My routines</h3>
            {data.hobbies.map((hobby, index) => (
              <div className="hobbies" key={index}>
                <li>{hobby}</li>
              </div>
            ))}
          </div>
          <div className="user-details">
            <div className="user-details-value-top">{data.email}</div>

            <div className="user-details-value">{data.insta}</div>

            <div className="user-details-value-top">{data.facebook}</div>

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
