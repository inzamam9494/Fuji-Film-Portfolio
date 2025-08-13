import { useMediaQuery } from "react-responsive";
import "./App.css";
import Header from "./components/Header.jsx";
import { Menu, Search } from "lucide-react";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isDesktop && (
        <div>
          <div>
            <div className="flex flex-row items-start">
                <div className="flex flex-col items-start p-4 fixed top-0 left-0">
              <button>
                <Menu size={16} />
              </button>
              <button className="mt-2">
                <Search size={16} />
              </button>
            </div>
            <div className="h-screen mx-4 w-px bg-black fixed ml-8">
              <hr/>
            </div>
            </div>
            
            {/* it's main content area */}
            <div className="flex flex-col ml-20">
             <div className="h-screen bg-pink-300">
              <p>Content for the pink section</p>
             </div>
             <div className="h-screen bg-blue-300">
              <p>Content for the blue section</p>
             </div>
             
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div>
          <h1>Welcome to the Mobile Version</h1>
        </div>
      )}
    </>
  );
}

export default App;
