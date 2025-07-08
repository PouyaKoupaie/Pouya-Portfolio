import Aurora from "./blocks/Backgrounds/Aurora/Aurora";
import ProfileCard from "./blocks/Components/ProfileCard/ProfileCard";
import QuickAccess from "./blocks/Components/QuickAccess/QuickAccess";
import ScrollVelocity from "./blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import TerminalCard from "./blocks/Components/Terminal/TerminalCardNext";
import profileImage from "./assets/images/5992434445958897155-Photoroom.png";
import Summary from "./blocks/Components/Summary";
import SpaceForm from "./blocks/Components/Form/Form";
import ResumePdf from "./assets/pdf/PouyaResume.pdf";
import { useRef } from "react";
import { scrollElements } from "./scrollElements";
import AnimateText from "./AnimateText";

function App() {
  const formRef = useRef<HTMLDivElement | null>(null);
  const handleContactClick = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Aurora blend={0.6} amplitude={1.0} speed={1} />
      <div className="w-full h-full absolute pointer-events-none ">
        {[
          { left: "5%", opacity: 0.8, duration: "6.8s", delay: "0.3s" },
          { left: "10%", opacity: 1, duration: "7.35s", delay: "0.2s" },
          { left: "15%", opacity: 0.6, duration: "7.0s", delay: "0.1s" },
          { left: "20%", opacity: 0.9, duration: "6.7s", delay: "0.5s" },
          { left: "25%", opacity: 0.8, duration: "7.2s", delay: "0.1s" },
          { left: "30%", opacity: 0.7, duration: "5.5s", delay: "0.5s" },
          { left: "35%", opacity: 0.9, duration: "7.8s", delay: "0.4s" },
          { left: "40%", opacity: 1, duration: "6.9s", delay: "0s" },
          { left: "44%", opacity: 0.6, duration: "7.05s", delay: "0s" },
          { left: "50%", opacity: 1, duration: "7.9s", delay: "0s" },
          { left: "55%", opacity: 0.7, duration: "6.5s", delay: "0.2s" },
          { left: "58%", opacity: 0.8, duration: "7.25s", delay: "0.2s" },
          { left: "60%", opacity: 0.9, duration: "7.3s", delay: "0.4s" },
          { left: "65%", opacity: 1, duration: "7.5s", delay: "0.2s" },
          { left: "70%", opacity: 0.8, duration: "6.8s", delay: "0.3s" },
          { left: "75%", opacity: 0.5, duration: "7.5s", delay: "1.5s" },
          { left: "80%", opacity: 0.6, duration: "7.6s", delay: "0.1s" },
          { left: "85%", opacity: 0.9, duration: "7.1s", delay: "0.3s" },
          { left: "88%", opacity: 0.9, duration: "7.2s", delay: "0.2s" },
          { left: "98%", opacity: 0.6, duration: "7.6s", delay: "0.1s" },
        ].map((point, i) => (
          <i
            key={i}
            className="absolute top-[-10px] w-2 h-4 shadow-white/50 shadow-sm bg-white rounded-full pointer-events-none animate-floating-points"
            style={{
              left: point.left,
              opacity: point.opacity,
              animationDuration: point.duration,
              animationDelay: point.delay,
            }}
          />
        ))}
      </div>
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
      <AnimateText />
      <ScrollVelocity
        elements={scrollElements}
        velocity={75}
        className="custom-scroll-text"
      />
      <SpaceForm formRef={formRef} />
      <div className="fixed left-6 top-6 md:scale-100 scale-75">
        <QuickAccess />
      </div>
    </>
  );
}

export default App;
