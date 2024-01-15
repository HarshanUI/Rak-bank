import React, { useState } from "react";
import PropTypes from "prop-types";
import { Circle } from "../Circle";
import { OverviewSlide } from "./overview-slide";
import "./slider.css";

const Slide = ({ slides, overviewList }) => {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const [hoverItem, setHoverItem] = useState(0);
  const percentage = -100 * active + "%";
  const sliderLength = slides.length - 1;

  const useScrollPosition = (e) => {
    if (active > sliderLength) {
      return setActive(0);
    }
    if (e.deltaY > 0) {
      active !== sliderLength && setActive((prv) => prv + 1);
    } else {
      setActive((prv) => prv && prv - 1);
    }
  };

  React.useEffect(() => {
    const getData = setTimeout(() => {
      document.addEventListener("wheel", useScrollPosition);
    }, 200);
    return () => {
      clearTimeout(getData);
      document.removeEventListener("wheel", useScrollPosition);
    };
  }, [useScrollPosition]);

  const handleMouseEnter = (e, id) => {
    setHoverItem(id);
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHoverItem(0);
    setHover(false);
  };

  const onOverviewSubmit = () => {
    return alert("Overview submitted data alert");
  };

  if (slides.length === 0) {
    return <h1>Slide's are not Available</h1>;
  }
  return (
    <>
      <div
        className="slides"
        style={{ transform: `translate3d(0, ${percentage}, 0)` }}
        data-testid="slides"
      >
        {slides.map((child, index) => {
          const optionList = !!child.options && child.options;
          return (
            <div
              className={`slide ${index === active && "active"}`}
              key={index}
            >
              <div className="container-slide">
                <div
                  className={`${
                    sliderLength === active ? "slide-overview" : "slide-text"
                  }`}
                >
                  <h1>{child.title}</h1>
                </div>
                {sliderLength === active ? (
                  <OverviewSlide
                    {...overviewList}
                    onOverviewSubmit={onOverviewSubmit}
                  />
                ) : (
                  <div className="slide-emoji">
                    {optionList &&
                      optionList.map((option, index) => {
                        return (
                          <div
                            key={index}
                            className={`hover-emoji ${
                              hover &&
                              option.id !== hoverItem &&
                              "hover-emoji-other"
                            }`}
                            onMouseEnter={(e) => handleMouseEnter(e, option.id)}
                            onMouseLeave={handleMouseLeave}
                          >
                            <span className="emoji-icon">{option.icon}</span>
                            <span className="emoji-label">{option.label}</span>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {slides.length > 0 && (
        <Circle slides={slides} active={active} setActive={setActive} />
      )}
    </>
  );
};
Slide.propTypes = {
  slides: PropTypes.array.isRequired,
  overviewList: PropTypes.object.isRequired,
};

export default Slide;
