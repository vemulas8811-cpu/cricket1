import { useEffect, useState } from "react";
import {
  PlayerCard,
  Section,
  SectionTitle,
  LoadingSpinner,
  EmptyState,
} from "../components/index.js";
import playerService from "../services/playerService.js";
import { samplePlayers } from "../data/sampleData.js";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    playerService
      .getAll()
      .then((data) => setPlayers(data || samplePlayers))
      .catch(() => setPlayers(samplePlayers))
      .finally(() => setLoading(false));
  }, []);

  const filteredPlayers = (players || []).filter((player) => {
    const playerName = player.user?.name || player.name || "";
    return playerName.toLowerCase().includes(search.toLowerCase());
  });

  if (loading) return <LoadingSpinner />;

  return (
    <Section className="space-y-8">
      <div>
        <SectionTitle
          title="Player Squad"
          subtitle="Elite athletes competing in the league"
        />
        <input
          type="text"
          placeholder="Search players..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-6 w-full rounded-2xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-500"
        />
      </div>

      {filteredPlayers.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPlayers.map((player) => (
            <PlayerCard
              key={player.id}
              player={{
                ...player,
                name: player.user?.name || player.name,
                playerType: player.role || player.playerType,
                team: player.team?.name || player.team,
              }}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No players found"
          description="Try adjusting your search filters"
          icon="🔍"
        />
      )}
    </Section>
  );
};

export default Players;
