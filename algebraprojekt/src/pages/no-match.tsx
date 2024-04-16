import Arrow from "../assets/arrow.svg";
const NoMatch = () => {
  return (
    <>
      <a href="/vjezbe">
        <img className="back" src={Arrow} alt="arrow" />
      </a>
      404 Not Found
      <img
        src="https://www.icegif.com/wp-content/uploads/icegif-3225.gif"
        alt=""
      />
    </>
  );
};
export default NoMatch;
