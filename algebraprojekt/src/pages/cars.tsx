import { CarData, CarType } from "../data/cars";

const Cars = () => {
  return (
    <>
      <div className="cars">
        {CarData.map((car: CarType) => {
          return (
            <div className={`cars__card__${car.title}`}>
              <img className="cars__img" src={car.imgUrl} alt="car" />
              <h1 className="cars__title">{car.title}</h1>
              <p className="cars__about">{car.about}</p>
              <button className="cars__button">Learn more</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cars;
