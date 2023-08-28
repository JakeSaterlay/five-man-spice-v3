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
        height={"100%"}
        width={"100%"}
      />
      Hello {player.name} you are {player.champion} {player.role}
    </div>
  );
}

export default ChampionCard;
