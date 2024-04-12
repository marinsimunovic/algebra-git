import Arrow from "../assets/arrow.svg";
const NoMatch = () => {
  return (
    <>
      <a href="/vjezbe">
        <img className="back" src={Arrow} alt="arrow" />
      </a>
      404 Not Found
    </>
  );
};
export default NoMatch;
