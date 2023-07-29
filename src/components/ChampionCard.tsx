import { Player } from "../App";
import styles from "../styles/championcard.module.css";

interface Props {
  player: Player;
}

function ChampionCard({ player }: Props) {
  return (
    <div className={styles.container}>
      Hello {player.name} you are {player.champion} {player.role}
    </div>
  );
}

export default ChampionCard;
