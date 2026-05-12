const SkeletonLoader = ({ count = 3, type = "card" }) => {
  if (type === "card") {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="animate-pulse rounded-3xl border border-slate-800/50 bg-slate-900/40 p-6"
            >
              <div className="h-32 rounded-full bg-slate-800"></div>
              <div className="mt-4 space-y-3">
                <div className="h-6 rounded-lg bg-slate-800"></div>
                <div className="h-4 rounded-lg bg-slate-800 w-3/4"></div>
              </div>
            </div>
          ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="animate-pulse rounded-2xl border border-slate-800/50 bg-slate-900/40 p-4"
          >
            <div className="h-6 rounded-lg bg-slate-800 w-3/4"></div>
            <div className="mt-3 h-4 rounded-lg bg-slate-800"></div>
          </div>
        ))}
    </div>
  );
};

export default SkeletonLoader;
