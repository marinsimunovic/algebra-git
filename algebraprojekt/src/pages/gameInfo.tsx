import { useParams } from "react-router-dom";
import { GameType, gamesData } from "../data/video-games";
import { useEffect, useState } from "react";

import Arrow from "../assets/arrow.svg";
const GameInfo = () => {
  const { gameId } = useParams();
  const [data, setData] = useState<GameType>();
  const getGameInfo = () => {
    const game = gamesData.find((game) => {
      return game.id === gameId;
    });
    setData(game);
  };
  useEffect(() => {
    getGameInfo();
  }, []);
  return (
    <>
      {data ? (
        <>
          <a href="/games">
            <img className="back" src={Arrow} alt="arrow" />
          </a>
          <div className="game">
            <div className="game__images">
              <img
                className="game__img--sm"
                src={data?.imgUrl}
                alt={data?.name}
              />
              <img className="game__img--bg" src={data?.imgUrl2} alt="img" />
            </div>
            <h1 className="game__title">{data?.name}</h1>
            <h3>Company:{data.developer}</h3>
            <p className="game__info">{data.about}</p>
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
