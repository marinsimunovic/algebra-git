import { seriesData } from "../data/series";
import Arrow from "../assets/arrow.svg";
import { useNavigate } from "react-router-dom";

const Series = () => {
  const navigate = useNavigate();
  const goTo = (SeriesId: string) => {
    console.log("url: ", SeriesId);
    navigate(SeriesId);
  };
  return (
    <>
      <div className="page">
        <div className="page__left">
          <div className="arrow">
            {" "}
            <a href="/vjezbe">
              <img className="back" src={Arrow} alt="arrow" />
            </a>
          </div>
          <div className="page__content"></div>
        </div>
        <div className="page__midle">
          <div className="series__grid">
            {seriesData.map((show) => {
              return (
                <>
                  <div
                    id={show.id}
                    onClick={() => goTo(show.id)}
                    className="series__card"
                  >
                    <img className="series__img" src={show.imgUrl} alt="" />
                    <h1 className="series__name">{show.name}</h1>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="page__right"></div>
      </div>
    </>
  );
};

export default Series;
