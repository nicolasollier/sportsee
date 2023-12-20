import styles from "./SideBar.module.scss";
import MusculationIcon from "../../assets/icons/MusculationIcon";
import BikeIcon from "../../assets/icons/BikeIcon";
import SwimmingIcon from "../../assets/icons/SwimmingIcon";
import YogaIcon from "../../assets/icons/YogaIcon";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__list}>
        <YogaIcon />
        <SwimmingIcon />
        <BikeIcon />
        <MusculationIcon />
      </div>

      <span className={styles.sidebar__trademark}>
        Copyright, SportSee 2024
      </span>
    </div>
  );
};

export default SideBar;
