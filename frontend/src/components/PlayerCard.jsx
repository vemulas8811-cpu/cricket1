import Card from "./Card.jsx";

const PlayerCard = ({ player = {} }) => {
  const playerName = player.name || "Player";
  const playerType = player.playerType?.replace(/_/g, " ") || "Unknown Role";
  const profileImage =
    player.profileImage ||
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop";

  const handleImageError = (e) => {
    e.target.src =
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop";
  };

  return (
    <Card>
      <div className="flex flex-col items-center text-center">
        <img
          src={profileImage}
          alt={playerName}
          onError={handleImageError}
          className="h-32 w-32 rounded-full border-4 border-cyan-500/30 object-cover"
        />
        <h3 className="mt-4 text-xl font-bold text-white">{playerName}</h3>
        <p className="text-sm text-slate-400">{playerType}</p>
        <p className="mt-2 text-sm text-slate-300">
          {player.team || "Unassigned"}
        </p>

        <div className="mt-6 grid w-full grid-cols-3 gap-4 border-t border-slate-800 pt-4">
          <div>
            <p className="text-2xl font-bold text-cyan-400">
              {player.runs ?? 0}
            </p>
            <p className="text-xs text-slate-400">Runs</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-cyan-400">
              {player.wickets ?? 0}
            </p>
            <p className="text-xs text-slate-400">Wickets</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-cyan-400">
              {player.matches ?? 0}
            </p>
            <p className="text-xs text-slate-400">Matches</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PlayerCard;
