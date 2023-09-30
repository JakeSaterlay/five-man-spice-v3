import { Player } from "../App";

interface Props {
  player: Player;
  onReroll: (playerId: string) => void;
}

function ChampionCard({ player, onReroll }: Props) {
  return (
    <div className="flex flex-col h-64 w-80 bg-slate-600 rounded-lg p-2 transition ease-in-out hover:scale-110">
      <div>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${player.champion}_0.jpg`}
        />
      </div>
      <div className="flex text-white justify-between items-center h-full">
        <p>{player.name}</p>
        <p>{player.champion}</p>
        <p>{player.role}</p>
        <button
          className="bg-purple-500 p-2 rounded"
          onClick={() => onReroll(player.id)}
        >
          Reroll
        </button>
      </div>
    </div>
  );
}

export default ChampionCard;
