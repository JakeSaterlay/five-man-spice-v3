import { Player } from "../App";
import ChampionCard from "./ChampionCard";
interface Props {
  players: Player[];
  onReroll: (playerId: string) => void;
}

function ChampionGrid({ players, onReroll }: Props) {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {players.map((player, index) => {
        return <ChampionCard player={player} key={index} onReroll={onReroll} />;
      })}
    </div>
  );
}

export default ChampionGrid;
