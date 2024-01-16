import React from "react";
import styles from "./DailyChart.module.scss";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const DailyChart = ({ data }) => {
  return (
    <div className={`${styles.card} ${styles.daily_activity}`}>
      <ResponsiveContainer
        className={styles.daily_activity__container}
        width="100%"
        height="90%"
      >
        <div className={styles.daily_activity__header}>
          <span className={styles.daily_activity__title}>
            Activité quotidienne
          </span>

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

        <BarChart
          className={styles.daily_activity__chart}
          data={data}
          barGap={8}
          barSize={8}
        >
          <Tooltip />
          <CartesianGrid
            vertical={false}
            strokeDasharray="2"
          />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis
            yAxisId="right"
            dataKey="kilogram"
            orientation="right"
            domain={["dataMin - 1", "dataMax + 1"]}
            axisLine={false}
            tickLine={false}
            tickMargin={36}
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill={"#282D30"}
            radius={[5, 5, 0, 0]}
          />
          <YAxis dataKey="calories" yAxisId="left" hide={true} />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill={"#ff0101"}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyChart;
