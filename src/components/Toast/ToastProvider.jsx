import React, { createContext, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ToastContainer from "./ToastContainer";

const ToastContext = createContext();
let externalShowToast;

export const useToast = () => useContext(ToastContext);

// External API
export const toast = {
  success: (msg) => externalShowToast({ type: "success", message: msg }),
  error: (msg) => externalShowToast({ type: "error", message: msg }),
  info: (msg) => externalShowToast({ type: "info", message: msg }),
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = (toast) => {
    setToasts((prev) => {
      const exists = prev.some(
        (t) => t.message === toast.message && t.type === toast.type,
      );
      if (exists) return prev;
      return [...prev, { ...toast, id: Date.now() }];
    });
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    externalShowToast = showToast;
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {ReactDOM.createPortal(
        <ToastContainer toasts={toasts} removeToast={removeToast} />,
        document.body,
      )}
    </ToastContext.Provider>
  );
};
