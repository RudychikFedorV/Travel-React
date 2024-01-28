import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ArchiveIcons from "../components/Icons/ArchiveIcons";
import ArrowIcons from "../components/Icons/ArrowIcons";
import ClockIcons from "../components/Icons/ClockIcons";
import CloudIcons from "../components/Icons/CloudIcons";
import SendIcons from "../components/Icons/SendIcons";
import StarIcons from "../components/Icons/StarIcons";

export const TravelPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="TravelPage">
      <div className="TravelPage__background">
        <div className="TravelPage__img">
          <img src="/backg.png" alt="Travel Page" />
        </div>
        <div className="TravelPage__arrow" onClick={handleGoBack}>
          <ArrowIcons />
          {/* <button onClick={handleGoBack}>Back</button> */}
        </div>
        <div className="TravelPage__archive">
          <ArchiveIcons />
        </div>
        <div className="TravelPage__geolocation">
          <div className="TravelPage__sectionst">
            <div className="TravelPage__title">Andes Mountain</div>
            <div className="TravelPage__price">Price</div>
          </div>

          <div className="TravelPage__sections">
            <Link to="/">
              <div className="TravelPage__section">
                <div className="TravelPage__svg">
                  <img src="/marker.svg" alt="marker" />
                </div>
                <div className="TravelPage__desc">South, America</div>
              </div>
            </Link>
            <div className="TravelPage__rating">
              <span>$</span>230
            </div>
          </div>
        </div>
      </div>

      <div className="TravelPage__info">
        <div className="TravelPage__overview">Overview</div>
        <div className="TravelPage__details">Details</div>
      </div>

      <div className="TravelPage__icons">
        <div className="TravelPage__icon">
          <div className="TravelPage__icons-clock">
            <ClockIcons />
          </div>
          <div className="TravelPage__icons-desc">8 hours</div>
        </div>

        <div className="TravelPage__icon">
          <div className="TravelPage__icons-clock">
            <CloudIcons />
          </div>
          <div className="TravelPage__icons-desc">16 &#186;C</div>
        </div>

        <div className="TravelPage__icon">
          <div className="TravelPage__icons-clock">
            <StarIcons />
          </div>
          <div className="TravelPage__icons-desc">4.5</div>
        </div>
      </div>

      <div className="TravelPage__text">
        This vast mountain range is renowned for its remarkable diversity in
        terms of topography and climate. It features towering peaks, active
        volcanoes, deep canyons, expansive plateaus, and lush valleys. The Andes
        are also home to{" "}
      </div>

      <Link to="/travel">
        <div className="TravelPage__btn btn">
          <div className="TravelPage__btn-text">Book Now</div>
          <div className="TravelPage__send">
            <SendIcons />
          </div>
        </div>
      </Link>
    </div>
  );
};
