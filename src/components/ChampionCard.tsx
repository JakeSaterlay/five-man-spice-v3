import { Player } from "../App";

interface Props {
  player: Player;
}

function ChampionCard({ player }: Props) {
  return (
    <>
      Hello {player.name} you are {player.champion} {player.role}
    </>
  );
}

export default ChampionCard;
