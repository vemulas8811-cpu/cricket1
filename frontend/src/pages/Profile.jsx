import { useEffect, useState } from "react";
import API from "../services/api.js";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/auth/me")
      .then((res) => setProfile(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6">
      <div className="card">
        <h1 className="text-3xl font-bold text-cyan-300">Profile</h1>
        <p className="mt-2 text-slate-300">
          Your account details, team assignment, and performance stats.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold text-white">Account</h2>
          <p className="mt-3 text-slate-300">Name: {profile.name}</p>
          <p className="mt-2 text-slate-300">Email: {profile.email}</p>
          <p className="mt-2 text-slate-300">Role: {profile.role}</p>
          <p className="mt-2 text-slate-300">
            Member since: {new Date(profile.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-white">Player Profile</h2>
          {profile.player ? (
            <>
              <p className="mt-3 text-slate-300">
                Type: {profile.player.playerType}
              </p>
              <p className="mt-2 text-slate-300">
                Phone: {profile.player.phone}
              </p>
              <p className="mt-2 text-slate-300">
                Team: {profile.player.team?.name || "Unassigned"}
              </p>
              <p className="mt-2 text-slate-300">
                Runs: {profile.player.totalRuns}
              </p>
              <p className="mt-2 text-slate-300">
                Wickets: {profile.player.totalWickets}
              </p>
            </>
          ) : (
            <p className="mt-3 text-slate-400">
              No player profile is associated with this account yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
