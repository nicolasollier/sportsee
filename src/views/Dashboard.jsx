import React from "react";
import { useState, useEffect } from "react";
import "../styles/styles.scss";
import styles from "./Dashboard.module.scss";

import DailyChart from "../components/Charts/DailyChart/DailyChart";
import NutritionCard from "../components/Cards/PerformanceCard/NutritionCard";
import Score from "../components/Charts/Score/Score";
import Performances from "../components/Charts/Performances/Performances";
import Duration from "../components/Charts/Duration/Duration";

import { getUserDatas } from "../services/api/api.service";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  const fetchUserDatas = async () => {
    const userDatas = await getUserDatas();

    setUser(userDatas);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUserDatas();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <>
          <div>
            <h1>
              Bonjour <span>{user.userInfos.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>

          <div className={styles.dashboard}>
            <div>
              <DailyChart />
              <div className={styles.dashboard_bottom_row}>
                <Duration />
                <Performances />
                <Score score={12} />
              </div>
            </div>
            <div className={styles.dashboard_right_col}>
              <NutritionCard
                type="Calories"
                score={user.keyData.calorieCount}
              />
              <NutritionCard
                type="Proteines"
                score={user.keyData.proteinCount}
              />
              <NutritionCard
                type="Glucides"
                score={user.keyData.carbohydrateCount}
              />
              <NutritionCard type="Lipides" score={user.keyData.lipidCount} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
