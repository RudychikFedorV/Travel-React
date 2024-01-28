import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LikeIcon from "../../../components/Icons/LikeIcon";

export const HomeTravel = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="home-travel">
      <motion.ul
        className="home-travel__list"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.li variants={item} className="home-travel__item">
          <Link to="/travel">
            <img src="/travel.png" alt="travel" />
          </Link>
        </motion.li>

        <motion.li variants={item} className="home-travel__item">
          <Link to="/travel">
            <img src="/travel.png" alt="travel" />
          </Link>
        </motion.li>
        
        <motion.li variants={item} className="home-travel__item">
          <Link to="/travel">
            <img src="/travel.png" alt="travel" />
          </Link>
        </motion.li>

        <motion.li variants={item} className="home-travel__item">
          <Link to="/travel">
            <img src="/travel.png" alt="travel" />
          </Link>
        </motion.li>

        <motion.li variants={item} className="home-travel__item">
          <Link to="/travel">
            <img src="/travel.png" alt="travel" />
          </Link>
        </motion.li>

        <motion.li variants={item} className="home-travel__item">
          <Link to="/travel">
            <img src="/travel.png" alt="travel" />
          </Link>
        </motion.li>

      </motion.ul>

      <Link to="/">
        <div className="home-travel__likeIcon">
          <LikeIcon />
        </div>
      </Link>
      
      <div className="home-travel__geolocation">
        <div className="home-travel__title">
          Mount Fuji,<span> Tokyo</span>
        </div>
        <div className="home-travel__sections">
          <Link to="/">
            <div className="home-travel__section">
              <div className="home-travel__svg">
                <img src="/marker.svg" alt="marker" />
              </div>
              <div className="home-travel__desc">Tokyo, Japan</div>
            </div>
          </Link>
          <Link to="/">
            <div className="home-travel__block">
              <div className="home-travel__vector">
                <img src="/vector.svg" alt="vector" />
              </div>
              <div className="home-travel__rating">4.8</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
