import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";
import styles from "./Score.module.scss";

const Score = ({ score }) => {
  const data = [
    {
      name: "Score",
      value: score,
      fill: "#ff0101",
    },
  ];

  return (
    <div className={styles.score}>
      <h2 className={styles.score__title}>Score</h2>
      <div className={styles.score__circle}>
        <span className={styles.score__circle__score}>{score}%</span>
        <span className={styles.score__circle__description}>de votre <br /> objectif</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="86%"
          outerRadius="100%"
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]} 
            tick={false}
          />
          <RadialBar
            clockWise
            dataKey="value"
            cornerRadius={10}
            fill={data[0].fill}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Score;
