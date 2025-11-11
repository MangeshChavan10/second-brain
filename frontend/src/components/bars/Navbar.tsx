
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [currentTab,setCurrentTab] = useState(0);
    const tabs = [
  { name: "Home", path: "/landing" },
  { name: "Features", path: "/features" },
  { name: "Login", path: "/login" },
  { name: "Signup", path: "/signup" },
];

    const navigate = useNavigate();
  return (
    <div className="absolute left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/10 backdrop-blur-2xl shadow-2xl text-white h-15 flex gap-5 px-10 items-center rounded-2xl mt-10">
            {
                tabs.map((tab,idx)=>{
                    const isActive = currentTab === idx;
                    return(
                    <div 
                     onClick={()=>{navigate(tab.path)}}
                     className="hover:scale-105  transition-all duration-400 cursor-pointer" key={idx}>
                        
                        <span
                        className={`${isActive ? 
                            "relative bg-white/40 p-2 rounded-full px-4 transition-all duration-400" : 
                            " p-2 rounded transition-all duration-400" }`}
                         onClick={()=>setCurrentTab(idx)}>{tab.name}
                         {isActive  && <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" 
                         style={{animationDuration:"2s",animationIterationCount:"1"}}
                         /> }
                         
                         </span>

                         

                         

                    </div>
                    )
})
            }
    </div>
</div>
  )
}

export default Navbar
