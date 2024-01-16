import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./Duration.module.scss";
import { formatUserSessionsDays } from "../../../services/dataFormat.service";

const Duration = ({ data }) => {
  const formattedData = formatUserSessionsDays(data);

  const CustomCursor = ({ width, height, points }) => {
    return (
      <rect
        width={width}
        height={height + 40}
        x={points[0].x}
        fill="rgba(0,0,0,0.1)"
      />
    );
  };

  const CustomToolTip = ({ active, payload }) => {
    if (active) {
      return (
        <div className={styles.tooltip}>
          <p>{payload[0].value} min</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.duration}>
      <h3>
        Durée moyenne des <br /> sessions
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData}>
          <Tooltip cursor={<CustomCursor />} content={<CustomToolTip />} />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
              <stop offset="10%" stopColor="white" stopOpacity={0.5} />
              <stop offset="95%" stopColor="white" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 5,
              fill: "white",
            }}
          />
          <YAxis
            dataKey="sessionLength"
            hide={true}
            domain={["dataMin - 16", "dataMax + 54"]}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "white" }}
            fontSize={12}
            opacity={0.5}
            padding={{
              left: 20,
              right: 20,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Duration;
