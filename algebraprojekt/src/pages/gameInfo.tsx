import { useParams } from "react-router-dom";
import { GameType, gamesData } from "../data/video-games";
import { useEffect, useState } from "react";

import Arrow from "../assets/arrow.svg";
const GameInfo = () => {
  const { gameId } = useParams();
  const [data, seData] = useState<GameType>();
  const getGameInfo = () => {
    const game = gamesData.find((game) => {
      return game.id === gameId;
    });
    seData(game);
  };
  useEffect(() => {
    getGameInfo();
  }, []);
  return (
    <>
      {data ? (
        <>
          {" "}
          <a href="/games">
            <img className="back" src={Arrow} alt="arrow" />
          </a>
          <div>
            <img width={200} src={data?.imgUrl} alt={data?.name} />
            <h1>{data?.name}</h1>
            <p>{data.about}</p> <img src={data?.imgUrl2} alt="img" />
          </div>
        </>
      ) : (
        <div>
          <b>{gameId}</b>
          {"  "}nepostoji
        </div>
      )}
    </>
  );
};

export default GameInfo;
