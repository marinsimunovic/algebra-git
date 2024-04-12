import MovieRender from "../components/movie-render";
import { seriesData } from "../data/series";
import Arrow from "../assets/arrow.svg";
const Series = () => {
  return (
    <>
      <div className="page">
        <div className="page__left">
          <a href="/vjezbe">
            <img className="back" src={Arrow} alt="arrow" />
          </a>
          <div className="page__content">
            <div>
              {" "}
              <MovieRender
                //find moze vratit undefined moram pazit na to
                show={seriesData.find((show) => {
                  return activeTab.id === show.id;
                })}
              />
            </div>
          </div>
        </div>
        <div className="page__midle">
          <div className="series__header">Best TV shows Off all time</div>
          <div className="series__grid">
            {seriesData.map((show) => {
              return (
                <>
                  <div id={show.id} className="series__card">
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
