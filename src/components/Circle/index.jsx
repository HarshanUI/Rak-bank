import PropTypes from "prop-types";
const Circle = ({ slides, active, setActive }) => {
  return (
    <ul className="circle" data-testid="circle">
      {slides.map((child, index) => (
        <li className={index === active ? "active" : ""} key={index}>
          <button onClick={() => setActive(index)}>{index + 1}</button>
        </li>
      ))}
    </ul>
  );
};

Circle.propTypes = {
  slides: PropTypes.array.isRequired,
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
};

export { Circle };
