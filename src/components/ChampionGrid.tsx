import { Player } from "../App";
import ChampionCard from "./ChampionCard";
import styles from "../styles/championgrid.module.css";
interface Props {
  players: Player[];
  onReroll: (playerId: string) => void;
}

function ChampionGrid({ players, onReroll }: Props) {
  return (
    <div className={styles.container}>
      {players.map((player, index) => {
        return <ChampionCard player={player} key={index} onReroll={onReroll} />;
      })}
    </div>
  );
}

export default ChampionGrid;
