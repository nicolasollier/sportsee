import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/styles.scss";
import styles from "./Dashboard.module.scss";

import DailyChart from "../components/Charts/DailyChart/DailyChart";
import NutritionCard from "../components/Cards/PerformanceCard/NutritionCard";
import Score from "../components/Charts/Score/Score";
import Performances from "../components/Charts/Performances/Performances";
import Duration from "../components/Charts/Duration/Duration";
import Loader from "../components/Loader/Loader";

import { getUserDatas } from "../services/api/api.service";
import { formatUserScore } from "../services/dataFormat.service";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { userId } = useParams();
  const [user, setUser] = useState({});

  const fetchUserDatas = async () => {
    try {
      const userDatas = await getUserDatas(userId);

      if (!userDatas) {
        setHasError(true);
        setIsLoading(false);
        return;
      }

      setUser(userDatas);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDatas();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <div className={styles.errorContainer}>
          <p>Oops! Une Erreur s'est produite au chargement des données veuillez réessayer ou contacter votre webmestre.</p>
        </div>
      ) : (
        <>
          <div>
            <h1>
              Bonjour <span>{user.userInfos.userInfos.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>

          <div className={styles.dashboard}>
            <div>
              <DailyChart data={user.activity.sessions} />
              <div className={styles.dashboard_bottom_row}>
                <Duration data={user.averageSessions.sessions} />
                <Performances data={user.performance} />
                <Score score={formatUserScore(user.userInfos.score)} />
              </div>
            </div>
            <div className={styles.dashboard_right_col}>
              <NutritionCard
                type="Calories"
                score={user.userInfos.keyData.calorieCount}
              />
              <NutritionCard
                type="Proteines"
                score={user.userInfos.keyData.proteinCount}
              />
              <NutritionCard
                type="Glucides"
                score={user.userInfos.keyData.carbohydrateCount}
              />
              <NutritionCard
                type="Lipides"
                score={user.userInfos.keyData.lipidCount}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
