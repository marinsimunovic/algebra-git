import { useState } from "react";
import ChatImg from "../assets/chat.svg";
import GalleryImg from "../assets/gallery.svg";
import FollowImg from "../assets/follow.svg";
type MyInfo = {
  url: string;
  name: string;
  surename: string;
  age: number;
  hobbies: string[];
  awards: string;
  height: string;
  eyecolor: string;
  shape: string;
};

const Info: MyInfo = {
  url: "https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601_640.jpg",
  name: "Marin",
  surename: "Šimunović",
  age: 22,
  hobbies: ["playing guitar", "reading", "hiking"],
  awards: "none",
  height: "183",
  eyecolor: "blue",
  shape: "slim",
};

const Home = () => {
  const [data] = useState<MyInfo>(Info);

  return (
    <>
      <div className="user-profile">
        <img
          className="user-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYS_AWd0LAIhWutPb2Vx8Fm8MXEsSf1pcaA&s"
          alt="img"
        />
        <div className="user-info">
          <div className="username">
            {data.name} {data.surename}
          </div>
          <div className="location">Age: {data.age}</div>
        </div>
        <div className="user-hobbies">
          {data.hobbies.map((hobby, index) => (
            <div className="hobbies" key={index}>
              {hobby}
            </div>
          ))}
        </div>
        <div className="user-actions">
          <div className="user-actions-box">
            <img className="user-img" src={ChatImg} alt="" />
            <button className="user-button">Chat</button>
          </div>
          <div className="user-actions-box">
            <img className="user-img" src={GalleryImg} alt="" />
            <button className="user-button">Gallery</button>
          </div>
          <div className="user-actions-box">
            <img className="user-img" src={FollowImg} alt="" />
            <button className="user-button">Follow</button>
          </div>
        </div>
        <div className="user-details">
          <div className="detail-column">
            <div className="detail-row">
              <div className="detail-title">Age</div>
              <div className="detail-value">{data.age}</div>
            </div>
            <div className="detail-row">
              <div className="detail-title">Height</div>
              <div className="detail-value">{data.height}</div>
            </div>
          </div>
          <div className="detail-colum">
            <div className="detail-row">
              <div className="detail-title">Shape:</div>
              <div className="detail-value">{data.shape}</div>
            </div>
            <div className="detail-row">
              <div className="detail-title">Eye Color:</div>
              <div className="detail-value">{data.eyecolor}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
