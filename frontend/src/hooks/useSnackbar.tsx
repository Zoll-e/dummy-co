import { useState } from "react";

type SnackbarType = "success" | "error" | "info";

export function useSnackbar() {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<SnackbarType>("info");
  const [visible, setVisible] = useState(false);

  
  const showSnackbar = (msg: string, type: SnackbarType = "info", duration = 3000) => {
    setMessage(msg);
    setType(type);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, duration);
  };

  
  const Snackbar = () => {
    if (!visible) return null;

    let bgColor = "bg-gray-700";
    if (type === "success") bgColor = "bg-green-600";
    else if (type === "error") bgColor = "bg-red-600";
    else if (type === "info") bgColor = "bg-blue-600";

    return (
      <div
        className={`fixed top-18 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-lg text-white ${bgColor}`}
        role="alert"
        aria-live="assertive"
      >
        {message}
      </div>
    );
  };

  return { showSnackbar, Snackbar };
}
