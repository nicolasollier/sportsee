import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import { formatUserPerformances } from "../../../services/dataFormat.service";
import styles from "./Performances.module.scss";

const Performances = ({ datas }) => {
  datas = formatUserPerformances(datas);
  return (
    <div className={styles.performances}>
      <ResponsiveContainer width='100%' height='100%'>
          <RadarChart
            data={datas}
            margin={{ top: 15, right: 15, bottom: 15, left: 15 }}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey='kind' dy={3} />
            <Radar
              dataKey='value'
              fill='#FF0101'
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default Performances;
