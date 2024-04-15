import { useParams } from "react-router-dom";
import { SeriesType, seriesData } from "../data/series";
import { useEffect, useState } from "react";
import Arrow from "../assets/arrow.svg";
const GameInfo = () => {
  const { showId } = useParams();
  const [data, setData] = useState<SeriesType>();
  const getShowInfo = () => {
    const show = seriesData.find((show) => {
      return show.id === showId;
    });
    setData(show);
  };
  useEffect(() => {
    getShowInfo();
  }, []);
  return (
    <>
      {" "}
      {data ? (
        <>
          <a href="/games">
            <img className="back" src={Arrow} alt="arrow" />
          </a>
        </>
      ) : (
        <div>
          <b>{showId}</b>
          {"  "}nepostoji
        </div>
      )}
    </>
  );
};
export default GameInfo;
