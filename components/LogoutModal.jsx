import React from 'react';

const LogoutModal = ({ isVisible, onClose, onLogout }) => {
  if (!isVisible) return null; // Jangan render modal jika tidak visible

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold text-center mb-4">
          Apakah Anda yakin untuk keluar?
        </h2>
        <div className="flex justify-between">
          <button
            onClick={onLogout}
            className="px-4 py-2 w-20 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
          >
            Ya
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 w-20 bg-gray-500 text-white rounded-md hover:bg-gray-700 transition"
          >
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
