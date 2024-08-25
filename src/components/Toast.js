'use client';

import { useEffect } from 'react';

export default function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 transition-transform transform  duration-300 ease-in-out  ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } bg-green-500 text-white p-4 rounded shadow-lg`}
      style={{ zIndex: 999 }}
    >
      {message}
    </div>
  );
}
