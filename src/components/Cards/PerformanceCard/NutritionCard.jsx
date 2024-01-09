import React from "react";
import styles from "./NutritionCard.module.scss";
import { CaloriesIcon, ProteinsIcon, CarbsIcon, FatIcon } from "../../../assets/icons/Icons";

const NutritionCard = ({ type, score }) => {
  const formatScore = () => {
    if (score > 1000) {
      return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return score;
  };

  const renderUnit = () => {
    switch (type) {
      case "Calories":
        return "kCal";
      case "Proteines":
        return "g";
      case "Glucides":
        return "g";
      case "Lipides":
        return "g";
      default:
        return null;
    }
  };

  const renderIcon = () => {
    switch (type) {
      case "Calories":
        return <CaloriesIcon />;
      case "Proteines":
        return <ProteinsIcon />;
      case "Glucides":
        return <CarbsIcon />;
      case "Lipides":
        return <FatIcon />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.nutrition_card}>
      <div className={styles.nutrition_card__icon}>{renderIcon()}</div>
      <div className={styles.nutrition_card__texts}>
        <div className={styles.nutrition_card__score}>
          {formatScore()}
          {renderUnit()}
        </div>
        <div className={styles.nutrition_card__type}>{type}</div>
      </div>
    </div>
  );
};

export default NutritionCard;
