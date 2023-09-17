import { useState } from "react";
import "./App.css";
import { roleList } from "./data/constants";
import PlayerForm from "./components/PlayerForm";
import ChampionGrid from "./components/ChampionGrid";
import { getChampions } from "./data/utils/championUtils";
import { v4 as uuidv4 } from "uuid";

export interface Player {
  id: string;
  name: string;
  role: string;
  champion: string;
}

function App() {
  const [roles, setRoles] = useState<string[]>(roleList);
  const [champions, setChampions] = useState<string[]>(getChampions());
  const [players, setPlayers] = useState<Player[]>([]);
  console.log(champions);
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
      id: uuidv4(),
      name: playerName,
      champion: getRandomChamp(),
      role: getRandomRole(),
    };
    setPlayers([...players, newPlayer]);
  };

  const handleReset = () => {
    setRoles(roleList);
    setChampions(getChampions());
    setPlayers([]);
  };

  const handleReroll = (playerId: string) => {
    setPlayers(
      players.map((player) => {
        if (player.id === playerId) {
          return { ...player, champion: getRandomChamp() };
        } else {
          return player;
        }
      })
    );
  };

  return (
    <div>
      {players.length < 5 && <PlayerForm onPlayerSubmit={handlePlayerSubmit} />}
      {players.length >= 1 && <button onClick={handleReset}>Reset</button>}
      <ChampionGrid players={players} onReroll={handleReroll} />
    </div>
  );
}

export default App;
