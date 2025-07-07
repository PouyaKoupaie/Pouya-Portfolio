import Aurora from "./blocks/Backgrounds/Aurora/Aurora";
import ProfileCard from "./blocks/Components/ProfileCard/ProfileCard";
import QuickAccess from "./blocks/Components/QuickAccess/QuickAccess";
import ScrollVelocity from "./blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import TerminalCard from "./blocks/Components/Terminal/TerminalCardNext";
import profileImage from "./assets/images/5992434445958897155-Photoroom.png";
import TriangleBackground from "./blocks/Backgrounds/Aurora/triangle/TriangleBackground";
import Summary from "./blocks/Components/Summary";
import SpaceForm from "./blocks/Components/Form/Form";
import RotatingText from "./blocks/TextAnimations/RotatingText/RotatingText";
import ResumePdf from './assets/pdf/PouyaResume.pdf';
import { useRef } from "react";
import { scrollElements } from "./scrollElements";

function App() {
  const formRef = useRef<HTMLDivElement | null>(null);
  const handleContactClick = () => {
  formRef.current?.scrollIntoView({ behavior: "smooth" });
};
  return (
    <>
      <TriangleBackground />
      <Aurora blend={0.6} amplitude={1.0} speed={1} />
      <div className="w-full m-auto relative">
        <div className="flex flex-wrap md:justify-evenly gap-4">
          <div className="lg:w-1/4 md:w-1/3 w-2/3 m-auto md:m-0 flex flex-col justify-between  order-2 md:order-none">
            <div className="text-emerald-300">
              <Summary />
            </div>
            <button className="my-4">
              <a
                href={ResumePdf}
                download
                className="btn-85 relative inline-block text-white px-8 py-3 rounded-lg  z-0  "
              >
                Download CV
              </a>
            </button>
            <TerminalCard />
          </div>
          <div className="order-none m-auto md:m-0">
            <ProfileCard
              name="Pouya Koupaie"
              title="Frontend Developer"
              handle="parallel-user"
              status=""
              contactText="Contact Me"
              avatarUrl={profileImage}
              showUserInfo={true}
              enableTilt={true}
              onContactClick={handleContactClick}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center w-fit m-auto mt-12 text-3xl gap-3">
        <span className=" font-bold text-emerald-300">Creative</span>
        <RotatingText
          texts={["Coding!", "Components!", "Thinking!", "Solutions!"]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-indigo-500 from-25% via-sky-500 via-55% to-emerald-500 to-90% text-white font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg w-fit"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
      <ScrollVelocity
        elements={scrollElements}
        velocity={75}
        className="custom-scroll-text"
      />
      <SpaceForm formRef={formRef}/>
      <div className="fixed left-6 top-6 md:scale-100 scale-75">
        <QuickAccess />
      </div>
    </>
  );
}

export default App;
