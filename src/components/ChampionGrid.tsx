import { Player } from "../App";
import ChampionCard from "./ChampionCard";
import styles from "../styles/championgrid.module.css";
interface Props {
  players: Player[];
}

function ChampionGrid({ players }: Props) {
  return (
    <div className={styles.container}>
      {players.map((player, index) => {
        return <ChampionCard player={player} key={index} />;
      })}
    </div>
  );
}

export default ChampionGrid;
