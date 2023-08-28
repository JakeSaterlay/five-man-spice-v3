import { useState } from "react";
import "./App.css";
import { roleList, championList } from "./constants";
import PlayerForm from "./components/PlayerForm";
import ChampionGrid from "./components/ChampionGrid";

export interface Player {
  name: string;
  role: string;
  champion: string;
}

function App() {
  const [roles, setRoles] = useState<string[]>(roleList);
  const [champions, setChampions] = useState<string[]>(championList);
  const [players, setPlayers] = useState<Player[]>([]);

  const getRandomChamp = (): string => {
    const randomChampion =
      champions[Math.floor(Math.random() * champions.length)];

    setChampions(champions.filter((x) => x !== randomChampion));
    return randomChampion;
  };

  const getRandomRole = (): string => {
    const randomRole = roles[Math.floor(Math.random() * roles.length)];

    setRoles(roles.filter((x) => x !== randomRole));
    return randomRole;
  };

  const handlePlayerSubmit = (playerName: string) => {
    const newPlayer: Player = {
      name: playerName,
      champion: getRandomChamp(),
      role: getRandomRole(),
    };
    setPlayers([...players, newPlayer]);
  };

  const handleReset = () => {
    setRoles(roleList);
    setChampions(championList);
    setPlayers([]);
  };

  return (
    <>
      {players.length < 5 && <PlayerForm onPlayerSubmit={handlePlayerSubmit} />}
      {players.length >= 1 && <button onClick={handleReset}>Reset</button>}
      <ChampionGrid players={players} />
    </>
  );
}

export default App;
