import React from "react";
import styles from "./DailyChart.module.scss";
import { ResponsiveContainer, BarChart } from "recharts";

const DailyChart = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

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
