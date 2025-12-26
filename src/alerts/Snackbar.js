import { useEffect, useState } from "react";
import './snackAlert.css'

const Snackbar = ({ show = false, message ='' , type = "success", duration = 3000 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!show) return;

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [show, message, duration]);

  if (!visible) return null;

  return (
    <div className={`snack_alert ${type === "success" ? "success_style" : "error_style"}`}>
      {message}
    </div>
  );
};

export default Snackbar;

