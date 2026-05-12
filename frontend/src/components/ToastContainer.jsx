import Toast from "./Toast.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const ToastContainer = () => {
  const { toast } = useAuth();

  if (!toast) {
    return null;
  }

  return (
    <div className="fixed right-4 top-4 z-50 flex flex-col gap-3">
      <Toast message={toast.message} type={toast.type} />
    </div>
  );
};

export default ToastContainer;
