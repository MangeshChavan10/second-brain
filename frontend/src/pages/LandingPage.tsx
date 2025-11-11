import { useEffect, useState } from "react";
import { ArrowRight, Brain, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/bars/Navbar";

interface Problem {
  icon: string;
  text: string;
}

const LandingPage = () => {
  const [currentProblem, setCurrentProblem] = useState<number>(0);

  const problems: Problem[] = [
    { text: "Guess I'll just remember!", icon: "🤔" },
    { text: "Why take notes?", icon: "📝" },
    { text: "But where do I save it?", icon: "💭" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProblem((prev) => (prev + 1) % problems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full  bg-linear-to-br from-purple-300 via-purple-900 to-purple-950 relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center max-h-screen mt-12 px-4 py-12">

    
        <div className="mt-25">
          <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-white/40 min-h-[200px] flex items-center justify-center max-w-2xl w-full mb-16">
            <div className="text-center">
              <div className="text-7xl mb-5 animate-bounce">
                {problems[currentProblem].icon}
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white transition-all duration-500">
                {problems[currentProblem].text}
              </h3>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
            Stop losing brilliant ideas.
          </h2>
          <h2 className="text-xl md:text-3xl font-bold text-white mb-6 leading-tight">
            Start capturing them effortlessly.
          </h2>
          <p className=" md:text-xl text-white font-light mt-8">
            Along with your short notes
          </p>
        </div>

        <div>
          <button
          onClick={()=>navigate("/signup")}
          
          className="bg-purple-600 hover:bg-purple-500 text-white px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 group">
            Get Started
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;