import Button from "./Button.jsx";

const EmptyState = ({ title, description, action, icon = "📭" }) => {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-slate-800/50 bg-slate-900/40 p-8 text-center backdrop-blur-md">
      <div className="text-6xl">{icon}</div>
      <h3 className="mt-4 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-slate-400">{description}</p>
      {action && (
        <div className="mt-6">
          <Button variant="primary">{action.label}</Button>
        </div>
      )}
    </div>
  );
};

export default EmptyState;
