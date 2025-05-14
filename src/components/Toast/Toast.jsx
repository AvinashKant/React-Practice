import React, { useEffect } from "react";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const background = {
    success: "green",
    error: "red",
    info: "blue",
  }[type];

  return (
    <div
      style={{
        padding: "10px 20px",
        backgroundColor: background,
        color: "white",
        borderRadius: "5px",
        minWidth: "200px",
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
