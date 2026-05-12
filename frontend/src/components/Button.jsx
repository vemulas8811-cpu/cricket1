const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseClass =
    "rounded-full font-semibold transition-all duration-300 font-medium";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50",
    secondary: "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10",
    outline:
      "border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 hover:bg-slate-800/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseClass} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
