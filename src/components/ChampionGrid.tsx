import { Player } from "../App";
import ChampionCard from "./ChampionCard";

interface Props {
  players: Player[];
}

function ChampionGrid({ players }: Props) {
  return (
    <>
      {players.map((player, index) => {
        return <ChampionCard player={player} key={index} />;
      })}
    </>
  );
}

export default ChampionGrid;
