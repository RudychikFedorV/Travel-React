import { motion } from "framer-motion";
import SlideTravel1 from "../../../components/Icons/travelComponents/SlideTravel1";
import SlideTravel2 from "../../../components/Icons/travelComponents/SlideTravel2";

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
          <SlideTravel1 />
        </motion.li>

        <motion.li variants={item} className="home-travel__item">
          <SlideTravel2 />
        </motion.li>

        <motion.li variants={item} className="home-travel__item">
          <SlideTravel1 />
        </motion.li>

        <motion.li variants={item} className="home-travel__item">
          <SlideTravel1 />
        </motion.li>

        <motion.li variants={item} className="home-travel__item">
          <SlideTravel2 />
        </motion.li>
      </motion.ul>
    </div>
  );
};
