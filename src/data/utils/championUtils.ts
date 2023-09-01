import data from "../champions.json";

const getChampions = () => {
  const champs = Object.values(data.data).map((x) => x.id);
  return champs;
};

export { getChampions };
