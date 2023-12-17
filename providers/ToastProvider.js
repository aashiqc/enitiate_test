import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToastProvider = ({ children }) => {
  return (
    <div>
      <Toaster />
      {children}
    </div>
  );
};

export default ToastProvider;
