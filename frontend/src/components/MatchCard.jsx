import Card from "./Card.jsx";

const MatchCard = ({ match }) => {
  return (
    <Card>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-400">
            {match.status}
          </span>
          <span className="text-xs text-slate-400">{match.tournament}</span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 text-center">
            <p className="font-bold text-white">{match.team1}</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-cyan-400">vs</p>
          </div>
          <div className="flex-1 text-center">
            <p className="font-bold text-white">{match.team2}</p>
          </div>
        </div>

        {match.score && (
          <div className="flex items-center justify-between border-t border-slate-800 pt-4">
            <div className="text-center">
              <p className="text-xl font-bold text-cyan-400">
                {match.score.team1}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-400">/</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-cyan-400">
                {match.score.team2}
              </p>
            </div>
          </div>
        )}

        <div className="border-t border-slate-800 pt-4 text-center text-xs text-slate-400">
          <p>{match.venue}</p>
          <p>
            {new Date(match.date).toLocaleDateString()} at {match.time}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default MatchCard;
