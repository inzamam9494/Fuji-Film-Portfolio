import { useMediaQuery } from "react-responsive";
import "./App.css";
import Header from "./components/Header.jsx";
import { Menu, Search } from "lucide-react";
import Card from "./components/Card.jsx";
import PictureCard from "./components/PictureCard.jsx";
import fujiCamera1 from "./assets/images/fujiCamera_1.png";
import fujiCamera2 from "./assets/images/fujiCamera_2.png";

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
                <h1 className="headline text-center -mt-[250px]">
                  RELEASE IPA
                </h1>
              </div>
              {/* Section 2 */}
              <div className=" flex flex-row items-center justify-between">
                <div className="flex flex-col items-start w-1/3">
                  <h4>Limited Version</h4>
                  <h1 className="subheadline -mt-[60px]">INTAX</h1>
                  <h1 className="subheadline -mt-[140px]">FUJIFILM</h1>
                  <p className="text-start text-[0.8rem] -mt-[60px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minus voluptas quidem praesentium quis blanditiis ipsum
                    ullam explicabo veritatis dolor, natus unde consequatur
                    repellat saepe, perferendis mollitia esse eveniet
                    consectetur corporis dolore nobis illum aspernatur tempora.
                    Corporis consectetur dolorem iste quos quia! Exercitationem
                    officiis fugiat, cumque saepe eligendi mollitia facere,
                    quisquam pariatur iusto eius, placeat harum explicabo ad.
                    Veritatis, quibusdam earum
                  </p>
                  <button className=" cursor-pointer bg-black text-white my-2 px-3 py-2 hover:bg-[#7a2f08] transition-colors duration-300">
                    <h1 className="text-[0.8rem] font-bold whitespace-pre ">
                      B U Y N O W
                    </h1>
                  </button>
                </div>
                <div className="flex flex-col gap-2 w-1/4">
                  <Card batteryLevel="55" />
                  <Card batteryLevel="36" />
                  <Card batteryLevel="12" />
                </div>
              </div>
              {/* Section 3 */}
              <div>
                <h1
                  style={{ fontFamily: "My Custom Font" }}
                  className="text-[22rem] text-center text-[#973F0B]"
                >
                  RETROSCOPE
                </h1>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col items-start -mt-[350px] w-1/3">
                    <img
                      className="ml-16  h-[180px]"
                      src="https://images.pexels.com/photos/2422255/pexels-photo-2422255.jpeg"
                      alt=""
                    />
                    <h4 className="ml-16">
                      Watch the actual footage recoded <br />{" "}
                      <span className="text-[#973F0B]">an Intax</span>
                    </h4>
                  </div>
                  <div className="flex flex-col items-start justify-between -mt-[130px] w-1/3 mr-4">
                    <p className="text-start text-[0.8rem] font-bold ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Minus voluptas quidem praesentium quis blanditiis ipsum
                      ullam explicabo veritatis dolor, natus unde consequatur
                      repellat saepe, perferendis mollitia esse eveniet
                      consectetur corporis dolore nobis illum aspernatur
                      tempora. Corporis consectetur dolorem iste quos quia!
                      Exercitationem officiis fugiat, cumque saepe
                    </p>
                    <h3
                      style={{
                        fontFamily: "My Custom Font",
                        fontSize: "2rem",
                      }}
                    >
                      DESIGN
                    </h3>
                    <p className="text-start text-[0.8rem]">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Minus voluptas quidem praesentium quis blanditiis ipsum
                      ullam explicabo veritatis dolor, natus unde consequatur
                      repellat saepe, perferendis mollitia esse eveniet
                      consectetur corporis dolore nobis illum aspernatur
                      tempora. Corporis consectetur dolorem iste quos quia!
                      Exercitationem officiis fugiat, cumque saepe eligendi
                      mollitia
                    </p>
                    <br />
                    <p className="text-start text-[0.8rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet explicabo fugiat suscipit odio reiciendis molestias
                      dignissimos nihil neque animi ea sequi saepe nisi nobis
                      officia, autem officiis voluptates. Beatae, aliquam?{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* Section 4 */}
              <div>
                <div className="ml-4 -mt-[50px] overflow-visible">
                  <div className="rotate-[-10deg]">
                    <PictureCard img="https://images.pexels.com/photos/16978572/pexels-photo-16978572.jpeg" />
                  </div>
                </div>

                <div className="flex items-end justify-end">
                  <PictureCard img="https://images.pexels.com/photos/163034/old-retro-antique-vintage-163034.jpeg" />
                </div>
                <div className="ml-[150px] mt-[150px]">
                  <div className="rotate-[15deg]">
                    <PictureCard img="https://images.pexels.com/photos/11343517/pexels-photo-11343517.jpeg" />
                  </div>
                </div>
              </div>
              {/* Section 5 */}
              <div>
                <div className="flex flex-col items-center justify-center">
                  <h4 className="ml-16">Other Models</h4>
                  <h1 className="subheadline -mt-[60px]">COLLECTION</h1>
                </div>
                <div className="flex flex-row">
                  <div>
                    <img src={fujiCamera2} alt="" />
                    <h4 className="ml-16">Other Models</h4>
                  </div>
                  <div className="flex flex-col">
                    <img src={fujiCamera1} alt="" />
                    <h4 className="ml-16">Other Models</h4>
                  </div>
                </div>
              </div>
              {/* Section 6 */}
              <div className="flex flex-row">
                <img src="https://images.pexels.com/photos/3182452/pexels-photo-3182452.jpeg
                " alt="" />
              <div className="flex flex-col">
                <h4 className="ml-16">Other Models</h4>
                <h1 className="subheadline -mt-[60px]">RETHINK</h1>
                <h1 className="subheadline -mt-[60px]">CANVAS</h1>
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
