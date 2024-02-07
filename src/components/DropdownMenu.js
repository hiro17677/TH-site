// src/components/DropdownMenu.js
import React, { useState } from 'react';
import { Link } from "gatsby"


const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center w-12 h-12 bg-slate-400 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* 漢堡選單圖示 */}
        <div className="space-y-2">
          <span className="block w-7 h-0.5 bg-white"></span>
          <span className="block w-7 h-0.5 bg-white"></span>
          <span className="block w-7 h-0.5 bg-white"></span>
        </div>
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 w-40 py-2 mt-2 bg-white rounded shadow-xl">
          <Link to="/about/" className="block no-underline text-black font-bold text-center py-2">公司簡介</Link>                
          <Link to="/machines/" className="block no-underline text-black font-bold text-center py-2">設備介紹</Link> 
          <Link to="/contact/" className="block no-underline text-black font-bold text-center py-2">聯絡我們</Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
