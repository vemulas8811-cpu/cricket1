const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`space-y-2 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-slate-400">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
