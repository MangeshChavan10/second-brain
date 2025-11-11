import { PanelLeft, Plus, Share } from 'lucide-react'
import React, { useState } from 'react'

const HomePage = () => {
  const [sidebar, setSideBar] = useState(false);

  return (
    <div className="h-screen w-full flex overflow-hidden transition-all duration-300 bg-white/10 p-10">

        <div className={`h-full bg-purple-200 p-6 transition-all duration-300 ease-in-out 
            ${sidebar ? "w-64 " : "w-0"} overflow-hidden`}
            style={{ 
  opacity: sidebar ? 1 : 0,
  transform: sidebar ? 'translateX(0)' : 'translateX(-20px)'
}}
            >
                <h2 className="text-xl font-semibold mb-6">Menu</h2>
        <ul className="space-y-4">
          <li className="hover:text-purple-700 cursor-pointer">Dashboard</li>
          <li className="hover:text-purple-700 cursor-pointer">Projects</li>
          <li className="hover:text-purple-700 cursor-pointer">Settings</li>
        </ul>

        </div>

        <div
        className={`flex-1 transition-all duration-500 ease-in-out p-10 
            ${sidebar ? "ml-10" : ""} `}
        >



      <div className="flex justify-between items-center">
        
        <div className="flex items-center gap-5">
          <PanelLeft onClick={()=>{setSideBar(!sidebar)}} className='cursor-pointer' />
          <h3 className="text-3xl font-semibold">All Notes</h3>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3 cursor-pointer  active:scale-95 bg-purple-300 px-4 py-3 rounded-2xl transition-all duration-300">
            <Share />
            <button className='cursor-pointer'>Share Content</button>
          </div>

          <div className="flex items-center gap-3 cursor-pointer  active:scale-95 bg-purple-400 px-4 py-3 rounded-2xl transition-all duration-300">
            <Plus />
            <button className='cursor-pointer'>Add Content</button>
          </div>
        </div>
      </div>
       </div>
    </div>
  );
};

export default HomePage;
