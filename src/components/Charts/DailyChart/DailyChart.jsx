import React from "react";
import styles from "./DailyChart.module.scss";
import { BarChart } from "recharts";

const DailyChart = () => {
  return (
    <div className={`${styles.card} ${styles.daily_activity}`}>
      Daily Activity Chart
    </div>
  );
};

export default DailyChart;
