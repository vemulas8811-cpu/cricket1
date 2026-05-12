const Card = ({ children, className = "", onClick, hover = true }) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-3xl border border-slate-800/50 bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-300 ${
        hover
          ? "hover:border-cyan-500/50 hover:bg-slate-900/60 hover:shadow-lg hover:shadow-cyan-500/10"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
