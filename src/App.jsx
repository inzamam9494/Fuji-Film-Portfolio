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
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start p-4 fixed top-0 left-0">
                <button>
                  <Menu size={16} />
                </button>
                <button className="mt-2">
                  <Search size={16} />
                </button>
              </div>
              <div className="h-[550px] my-2 w-[1.5px] bg-black fixed ml-14">
                <hr />
              </div>
            </div>

            {/* it's main content area */}
            <div className="flex flex-col ml-20">
              {/* Header Section */}
              <div className="fixed top-0 left-20 right-0">
                <Header />
              </div>
              {/* Section 1 */}
              <div className="h-screen ">
                <h1 className="headline text-center">UNLIMITED</h1>
                <h1 className="headline text-center -mt-[280px]">
                  RELEASE IPA
                </h1>
              </div>
              {/* Section 2 */}
              <div className="h-screen flex flex-row items-center justify-between">
                <div className="flex flex-col">
                    
                </div>
                <div className="flex flex-col">
                  <p>Content for the second column</p>
                </div>
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
