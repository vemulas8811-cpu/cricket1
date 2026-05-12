import { useAuth } from "../context/AuthContext.jsx";

const PlayerDashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center rounded-3xl border border-slate-700 bg-slate-900/80 p-12 text-center shadow-glow shadow-cyan-500/10">
        <h1 className="text-3xl font-bold text-white mb-4">Player Dashboard</h1>
        <p className="text-slate-400 mb-6">
          Sign in or register to unlock your CPL player profile and match
          updates.
        </p>
        <p className="text-cyan-300">
          Use the Login or Register buttons in the navigation bar.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-cyan-500/15 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
        <h1 className="text-4xl font-black text-cyan-300">Player Dashboard</h1>
        <p className="mt-3 text-slate-400">
          Welcome back, {user.name}. Track your role, stats, and upcoming
          matches.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/20">
          <h2 className="text-xl font-semibold text-white">Player Profile</h2>
          <div className="mt-4 space-y-3 text-slate-300">
            <p>
              <span className="font-semibold text-white">Name:</span>{" "}
              {user.name}
            </p>
            <p>
              <span className="font-semibold text-white">Role:</span>{" "}
              {user.role}
            </p>
            <p>
              <span className="font-semibold text-white">Team:</span>{" "}
              {user.team}
            </p>
            <p>
              <span className="font-semibold text-white">City:</span>{" "}
              {user.city}
            </p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/20">
          <h2 className="text-xl font-semibold text-white">
            Performance Stats
          </h2>
          <div className="mt-4 space-y-3 text-slate-300">
            <p>
              <span className="font-semibold text-white">Matches:</span>{" "}
              {user.stats.matches}
            </p>
            <p>
              <span className="font-semibold text-white">Runs:</span>{" "}
              {user.stats.runs}
            </p>
            <p>
              <span className="font-semibold text-white">Wickets:</span>{" "}
              {user.stats.wickets}
            </p>
            <p>
              <span className="font-semibold text-white">AI Talent Score:</span>{" "}
              {user.talentScore}
            </p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/20">
          <h2 className="text-xl font-semibold text-white">Notifications</h2>
          <div className="mt-4 space-y-3 text-slate-300">
            {user.notifications.map((note, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-800/60 bg-slate-900/90 px-4 py-3"
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/20">
        <h2 className="text-xl font-semibold text-white">Upcoming Matches</h2>
        <div className="mt-4 grid gap-4">
          {user.upcomingMatches.map((match) => (
            <div
              key={match.id}
              className="rounded-3xl border border-slate-800/60 bg-slate-900/90 p-4"
            >
              <p className="font-semibold text-white">{match.label}</p>
              <p className="mt-1 text-slate-400">{match.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerDashboard;
