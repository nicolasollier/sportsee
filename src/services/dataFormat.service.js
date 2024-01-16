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
