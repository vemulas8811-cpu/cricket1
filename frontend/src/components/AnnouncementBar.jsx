const AnnouncementBar = ({ message, type = "info" }) => {
  const bgColor = {
    info: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
    success: "bg-green-500/10 border-green-500/30 text-green-400",
    warning: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
    error: "bg-red-500/10 border-red-500/30 text-red-400",
  }[type];

  return (
    <div
      className={`border ${bgColor} rounded-full px-4 py-3 text-center text-sm font-medium animate-pulse`}
    >
      {message}
    </div>
  );
};

export default AnnouncementBar;
