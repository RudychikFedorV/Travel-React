import React from "react";
import { Link } from "react-router-dom";
import LikeIcon from "../LikeIcon";

const SlideTravel2 = () => {
  return (
      <div className="SlideTravel">
        <Link to="/travel">
          <img src="/travel.png" alt="travel" />
        </Link>

        <Link to="/">
          <div className="SlideTravel__likeIcon">
            <LikeIcon />
          </div>
        </Link>

        <div className="SlideTravel__geolocation">
          <div className="SlideTravel__title">
          Andes, <span> South</span>
          </div>
          <div className="SlideTravel__sections">
            <Link to="/">
              <div className="SlideTravel__section">
                <div className="SlideTravel__svg">
                  <img src="/marker.svg" alt="marker" />
                </div>
                <div className="SlideTravel__desc">South, America</div>
              </div>
            </Link>
            <Link to="/">
              <div className="SlideTravel__block">
                <div className="SlideTravel__vector">
                  <img src="/vector.svg" alt="vector" />
                </div>
                <div className="SlideTravel__rating">4.9</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default SlideTravel2;
