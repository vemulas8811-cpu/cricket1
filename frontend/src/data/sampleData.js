export const sampleMatches = [
  {
    id: 1,
    team1: "Thunder Strikers",
    team2: "Phoenix Rising",
    status: "Completed",
    tournament: "Premier Cup 2024",
    date: new Date(2024, 4, 15),
    time: "7:00 PM",
    venue: "National Cricket Stadium",
    score: { team1: 185, team2: 162 },
  },
  {
    id: 2,
    team1: "Elite Warriors",
    team2: "Titans United",
    status: "Upcoming",
    tournament: "Premier Cup 2024",
    date: new Date(2024, 5, 1),
    time: "8:00 PM",
    venue: "International Cricket Arena",
    score: null,
  },
  {
    id: 3,
    team1: "Dragons Force",
    team2: "Storm Chasers",
    status: "Live",
    tournament: "Premier Cup 2024",
    date: new Date(2024, 5, 2),
    time: "3:30 PM",
    venue: "Champions Oval",
    score: { team1: 142, team2: 128 },
  },
];

export const samplePlayers = [
  {
    id: 1,
    name: "sanjay",
    playerType: "BATSMAN",
    team: "Thunder Strikers",
    runs: 1245,
    wickets: 0,
    matches: 15,
  },
  {
    id: 2,
    name: "manish",
    playerType: "BOWLER",
    team: "Phoenix Rising",
    runs: 145,
    wickets: 28,
    matches: 15,
  },
  {
    id: 3,
    name: "rohit",
    playerType: "ALL_ROUNDER",
    team: "Elite Warriors",
    runs: 892,
    wickets: 15,
    matches: 14,
  },
  {
    id: 4,
    name: "Thejas",
    playerType: "ALL_ROUNDER",
    team: "Dragons Force",
    runs: 765,
    wickets: 12,
    matches: 13,
  },
];

export const sampleTournaments = [
  {
    id: 1,
    name: "Premier League Championship 2024",
    description: "The flagship tournament featuring elite cricket players",
    startDate: new Date(2024, 4, 1),
    endDate: new Date(2024, 7, 15),
    status: "Ongoing",
    teams: 8,
    matches: 15,
  },
  {
    id: 2,
    name: "Summer Cup 2024",
    description: "A fast-paced limited-overs cricket tournament",
    startDate: new Date(2024, 6, 1),
    endDate: new Date(2024, 6, 30),
    status: "Scheduled",
    teams: 6,
    matches: 10,
  },
];

export const sampleHighlights = [
  {
    id: 1,
    title: "Thunder Strikers vs Phoenix Rising - Full Match",
    thumbnail:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=225&fit=crop",
    youtube: "dQw4w9WgXcQ",
    date: "May 15, 2024",
  },
  {
    id: 2,
    title: "Best Catches of the Season",
    thumbnail:
      "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&h=225&fit=crop",
    youtube: "dQw4w9WgXcQ",
    date: "May 20, 2024",
  },
  {
    id: 3,
    title: "Epic Last-Over Finish",
    thumbnail:
      "https://images.unsplash.com/photo-1552821206-7f2b7a6c8e2e?w=400&h=225&fit=crop",
    youtube: "dQw4w9WgXcQ",
    date: "May 22, 2024",
  },
];
