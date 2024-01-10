// src/components/DropdownMenu.js
import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* 汉堡菜单图标 */}
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
        </div>
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 w-40 py-2 mt-2 bg-white rounded shadow-xl">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Link 1</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Link 2</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Link 3</a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
