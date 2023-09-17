import { Player } from "../App";
import styles from "../styles/championcard.module.css";

interface Props {
  player: Player;
  onReroll: (playerId: string) => void;
}

function ChampionCard({ player, onReroll }: Props) {
  return (
    <div className={styles.container}>
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${player.champion}_0.jpg`}
      />
      <div className={styles.playerInfo}>
        <p>{player.name}</p>
        <p>{player.champion}</p>
        <p>{player.role}</p>
        <button onClick={() => onReroll(player.id)}>Reroll</button>
      </div>
    </div>
  );
}

export default ChampionCard;
