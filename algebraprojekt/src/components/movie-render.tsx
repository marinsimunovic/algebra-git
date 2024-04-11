import { MovieType } from "../types/main";
import Tag from "./tag";

type Props = {
  movie: MovieType | undefined;
};

const MovieRender = ({ movie }: Props) => {
  return (
    <>
      {movie ? (
        <div className="movie">
          <div className="movie__image-wrapper">
            <img
              className="movie__image"
              src={movie.imgUrl}
              alt="movie__image"
            />
            <img
              className="movie__image"
              src={movie.imgUrl2}
              alt="movie__image"
            />
          </div>
          <div className="movie__details">
            <h2 className="movie__name">{movie.name}</h2> {movie.age}
            {" - "}
            {movie.length}
          </div>
          <div>
            <b className="movie__date">{movie.year}</b>
          </div>
          <div className="tag__wrapper">
            {movie.genre.map((genre) => {
              return <Tag key={genre}>{genre}</Tag>;
            })}
          </div>{" "}
          <hr />
          <p className="movie__about">{movie.about}</p>
          <div>
            <hr />
            <h2>Cast</h2>
            <div className="movie__grid">
              {movie.cast.map((actor) => {
                return (
                  <div className="movie__actor" key={actor.realName}>
                    <img src={actor.imgUrl} alt={actor.realName} />
                    <div>
                      <div>{actor.realName}</div>
                      <div>
                        <b>{actor.movieName}</b>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>Za ovaj ID ne postoji niti jedan film u bazi</div>
      )}
    </>
  );
};

export default MovieRender;
