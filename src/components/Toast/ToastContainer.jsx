import React from 'react';
import Toast from './Toast';

const ToastContainer = ({ toasts, removeToast }) => (
  <div style={{
    position: 'fixed',
    top: 10,
    right: 10,
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
    {toasts.map(toast => (
      <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
    ))}
  </div>
);

export default ToastContainer;
