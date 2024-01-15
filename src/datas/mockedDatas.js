export const demoUserSummary = {
  data: {
    id: 1,
    userInfos: {
      firstName: "John",
      lastName: "Doe",
      age: 25,
    },
    score: 0.8,
    keyData: {
      calorieCount: 2000,
      proteinCount: 80,
      carbohydrateCount: 100,
      lipidCount: 70,
    },
  },
};

export const demoUserActivity = {
  data: {
    userId: 1,
    sessions: [
      {
        day: "2023-07-01",
        kilogram: 70,
        calories: 240,
      },
      {
        day: "2023-07-02",
        kilogram: 69,
        calories: 220,
      },
      {
        day: "2023-07-03",
        kilogram: 70,
        calories: 280,
      },
      {
        day: "2023-07-04",
        kilogram: 70,
        calories: 500,
      },
      {
        day: "2023-07-05",
        kilogram: 69,
        calories: 160,
      },
      {
        day: "2023-07-06",
        kilogram: 69,
        calories: 162,
      },
      {
        day: "2023-07-07",
        kilogram: 69,
        calories: 390,
      },
    ],
  },
};

export const demoUserSessions = {
  data: {
    userId: 1,
    sessions: [
      {
        day: 1,
        sessionLength: 30,
      },
      {
        day: 2,
        sessionLength: 40,
      },
      {
        day: 3,
        sessionLength: 50,
      },
      {
        day: 4,
        sessionLength: 30,
      },
      {
        day: 5,
        sessionLength: 30,
      },
      {
        day: 6,
        sessionLength: 50,
      },
      {
        day: 7,
        sessionLength: 50,
      },
    ],
  },
};

export const demoUserPerformance = {
  data: {
    userId: 1,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 200,
        kind: 1,
      },
      {
        value: 240,
        kind: 2,
      },
      {
        value: 80,
        kind: 3,
      },
      {
        value: 80,
        kind: 4,
      },
      {
        value: 220,
        kind: 5,
      },
      {
        value: 110,
        kind: 6,
      },
    ],
  },
};
