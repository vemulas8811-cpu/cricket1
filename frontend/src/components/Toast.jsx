const Toast = ({ message, type = "info", onClose }) => {
  const bgColor = {
    info: "bg-cyan-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  }[type];

  return (
    <div
      className={`${bgColor} rounded-full px-6 py-3 text-white shadow-lg shadow-black/50 animate-slide-in-up`}
    >
      {message}
    </div>
  );
};

export default Toast;
