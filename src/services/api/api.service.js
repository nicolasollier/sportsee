import { api } from "./config";
import {
  demoUserSummary,
  demoUserActivity,
  demoUserSessions,
  demoUserPerformance,
} from "../../datas/mockedDatas";

const env = process.env.REACT_APP_ENV;

export const getUserDatas = async (userId) => {
  try {
    if (!userId) {
      return {
        userInfos: demoUserSummary.data,
        activity: demoUserActivity.data,
        averageSessions: demoUserSessions.data,
        performance: demoUserPerformance.data,
      };
    }

    const [userRes, activityRes, sessionsRes, performanceRes] =
      await Promise.all([
        api.get(`/user/${userId}`),
        api.get(`/user/${userId}/activity`),
        api.get(`/user/${userId}/average-sessions`),
        api.get(`/user/${userId}/performance`),
      ]);

    return {
      userInfos: userRes.data.data,
      activity: activityRes.data.data,
      averageSessions: sessionsRes.data.data,
      performance: performanceRes.data.data,
    };
  } catch (error) {
    console.error(error);
  }
};
