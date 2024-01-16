import React from "react";
import styles from "./DailyChart.module.scss";
import { ResponsiveContainer} from "recharts";

const DailyChart = () => {
  return (
    <div className={`${styles.card} ${styles.daily_activity}`}>
      <ResponsiveContainer className={styles.daily_activity__container} width="100%" height="100%">
        <div className={styles.daily_activity__header}>
          <span className={styles.daily_activity__title}>Activité quotidienne</span>

          <div className={styles.legend}>
            <div className={styles.legend__items}>
              <div className={styles.legend__items__dot_gray}></div>
              <div>Poids(kg)</div>
            </div>
            <div className={styles.legend__items}>
              <div className={styles.legend__items__dot_red}></div>
              <div>Calories(kCal)</div>
            </div>
          </div>
        </div>

        {/* here goes the graph */}
      </ResponsiveContainer>
    </div>
  );
};

export default DailyChart;
