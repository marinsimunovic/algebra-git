import { useNavigate } from "react-router-dom";
import { gamesData } from "../data/video-games";

const Games = () => {
  const navigate = useNavigate();
  const goTo = (gameId: string) => {
    console.log("url: ", gameId);
    navigate(gameId);
  };
  return (
    <>
      <div className="games__grid">
        {gamesData.map((game) => {
          return (
            <div
              key={game.id}
              onClick={() => goTo(game.id)}
              className="games__card"
            >
              <img className="games__img" src={game.imgUrl} alt="" />
              <h2 className="games__name">{game.name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Games;
