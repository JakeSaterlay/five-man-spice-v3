import { Player } from "../App";
import styles from "../styles/championcard.module.css";

interface Props {
  player: Player;
}

function ChampionCard({ player }: Props) {
  return (
    <div className={styles.container}>
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${player.champion}_0.jpg`}
      />
      <div className={styles.playerInfo}>
        <p>{player.name}</p>
        <p>{player.champion}</p>
        <p>{player.role}</p>
        <button>Reroll</button>
      </div>
    </div>
  );
}

export default ChampionCard;
