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
          <div className="overflow-hidden">
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
                  <h4 className="kidfont">Limited Version</h4>
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
                    <h4 className="kidfont ml-16">
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
              <div className="flex flex-col">
                <div className="flex ml-6 rotate-[-10deg] w-1/4">
                  <PictureCard img="https://images.pexels.com/photos/31150980/pexels-photo-31150980.jpeg" />
                </div>
                <div className="self-end mr-12 rotate-[-10deg] w-1/3">
                  <PictureCard img="https://images.pexels.com/photos/163034/old-retro-antique-vintage-163034.jpeg" />
                </div>
                <div className="self-start ml-32 rotate-[15deg] w-1/4">
                  <PictureCard img="https://images.pexels.com/photos/11343517/pexels-photo-11343517.jpeg" />
                </div>
              </div>
              {/* Section 5 */}
              <div className="mt-32">
                <div className="flex flex-col items-center justify-center">
                  <h4 className="kidfont">Other Models</h4>
                  <h1 className="subheadline -mt-[60px]">COLLECTION</h1>
                </div>
                <div className="flex flex-row items-center justify-between mt-10">
                  <div className="flex flex-col items-center justify-center w-1/3">
                    <img className="scale-200" src={fujiCamera2} alt="" />
                    <h4 className="text-center -mt-[10px] text-[0.8rem]">
                      INTAX mini Evo <br /> <span className="text-[0.7rem] font-semibold">$5000.00</span>
                    </h4>
                  </div>
                  <div className="flex flex-col justify-end h-52">
                    <h4 className="text-center -mt-[10px] text-[0.8rem]">INTAX mini Evo <br /><span className="text-[0.7rem] font-semibold">$966.00</span></h4>
                  </div>
                  <div className="flex flex-col items-center justify-center w-1/3 -mt-10">
                    <img className="scale-120" src={fujiCamera1} alt="" />
                    <h4 className="mt-5 text-center text-[0.8rem]">
                      INTAX mini Evo <br />
                      <span className="text-[0.7rem] font-semibold">$5000.00</span>
                    </h4>
                  </div>
                </div>
              </div>
              {/* Section 6 */}
              <div className="flex flex-row items-start mt-32 mb-32 justify-between px-12">
                <img
                  className="h-[500px] w-[500px] border-10 border-white object-cover"
                  src="https://images.pexels.com/photos/11343517/pexels-photo-11343517.jpeg
                "
                  alt=""
                />
                <div className="flex flex-col px-16">
                  <h4 className="kidfont">Other Models</h4>
                  <h1 className="subheadline -mt-[60px]">RETHINK</h1>
                  <h1 className="subheadline -mt-[140px]">CANVAS</h1>
                  <p className="text-start text-[0.7rem] -mt-[60px]">
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
                  <p className="text-start text-[0.7rem] mt-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione voluptas blanditiis hic ut unde beatae vitae
                    accusantium architecto labore reprehenderit debitis, sed
                    aliquid est? Dolores quam tenetur voluptatem est mollitia?
                  </p>
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
