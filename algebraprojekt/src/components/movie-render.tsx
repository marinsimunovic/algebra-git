import { ActorType, MovieType } from "../pages/tabs";
import Tag from "./tag";

type Props = {
  movie: MovieType | undefined;
};

const MovieRender = ({ movie }: Props) => {
  return (
    <>
      {movie ? (
        <>
          {" "}
          <img src={movie.img} alt="img" />
          <h2>{movie.name}</h2>
          <div>
            <b>{movie.year}</b>
          </div>
          <p>{movie.about}</p>
          <div className="tag__wrapper">
            {movie.genre.map((genre) => {
              return <Tag key={genre}>{genre}</Tag>;
            })}
          </div>
          <div>
            <h2>Cast</h2>
            <div></div>
          </div>
        </>
      ) : (
        <div>Za ovaj ID ne postoji niti jedan film u bazi</div>
      )}
    </>
  );
};

export default MovieRender;
