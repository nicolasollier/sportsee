export function formatUserScore(userScore) {
  return userScore * 100;
}

export function formatUserPerformances(userPerformances) {
  const kindTranslations = {
    Energy: "Energie",
    Strength: "Force",
    Speed: "Vitesse",
    Intensity: "Intensité",
  };

  return userPerformances.data
    .map((perf) => {
      const kindKey = userPerformances.kind[perf.kind];
      const kindCapitalized =
        kindKey.charAt(0).toUpperCase() + kindKey.slice(1);
      const translatedKind =
        kindTranslations[kindCapitalized] || kindCapitalized;

      return {
        ...perf,
        kind: translatedKind,
      };
    })
    .reverse();
}

export function formatUserSessionsDays(data) {
  const formattedDays = [];
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  data.forEach((session) => {
    const dayLetter = days[session.day - 1];

    formattedDays.push({
      ...session,
      day: dayLetter,
    });
  });

  return formattedDays;
}

export function formatUserDailyDates(data) {
  const formattedDates = [];
  
  data.forEach((session) => {
    const day = session.day[session.day.length - 1];
    formattedDates.push({
      ...session,
      day: day,
    });
  });

  return formattedDates;
}
