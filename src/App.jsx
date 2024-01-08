import React from "react";
import { useState, useEffect } from "react";
import Layout from "./layout/Layout";
import "./styles/styles.scss";
import styles from "./App.module.scss";
import { getUserDatas } from "./services/api/api.service";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  const fetchUserDatas = async () => {
    const userDatas = await getUserDatas(18);

    setUser(userDatas);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUserDatas();
  }, []);

  return (
    <div className="App">
      <Layout>
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
              <div className={`${styles.card} ${styles.daily_activity}`}>
                Daily Activity Chart
              </div>
              <div className={styles.dashboard_bottom_row}>
                <div className={`${styles.card} ${styles.average_session}`}>Average Session Length</div>
                <div className={`${styles.card} ${styles.intensity}`}>Intensity Chart</div>
                <div className={`${styles.card} ${styles.score}`}>Goal Progress</div>
              </div>
            </div>
          </>
        )}
      </Layout>
    </div>
  );
}

export default App;
