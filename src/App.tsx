import Aurora from "./blocks/Backgrounds/Aurora/Aurora";
import ProfileCard from "./blocks/Components/ProfileCard/ProfileCard";
import QuickAccess from "./blocks/Components/QuickAccess/QuickAccess";
import ScrollVelocity from "./blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import nextLogo from "./assets/images/icons8-next-js.svg";
import reactLogo from "./assets/images/react-svgrepo-com.svg";
import reduxLogo from "./assets/images/icons8-redux.svg";
import jsLogo from "./assets/images/javascript-svgrepo-com.svg";
import tsLogo from "./assets/images/typescript-svgrepo-com.svg";
import hookForm from "./assets/images/react-hook-form-logo-only.svg";
import axiosLogo from "./assets/images/Axios--Streamline-Svg-Logos.svg";
import reactQueryLogo from "./assets/images/React-Query-Icon--Streamline-Svg-Logos.svg";
import tailwindLogo from "./assets/images/tailwindcss-mark.d52e9897.svg";
import gitLogo from "./assets/images/Git--Streamline-Svg-Logos.svg";
import githubLogo from "./assets/images/Github-Icon--Streamline-Svg-Logos.svg";
import jiraLogo from "./assets/images/jira-svgrepo-com.svg";
import TerminalCard from "./blocks/Components/Terminal/TerminalCardNext";
// import profileImage from "../public/5992434445958897155-Photoroom.png";
import TriangleBackground from "./blocks/Backgrounds/Aurora/triangle/TriangleBackground";
import Summary from "./blocks/Components/Summary";
import SpaceForm from "./blocks/Components/Form/Form";
import RotatingText from "./blocks/TextAnimations/RotatingText/RotatingText";
import ResumePdf from './assets/pdf/PouyaResume.pdf';

function App() {
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
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl='/5992434445958897155-Photoroom.png'
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log("Contact clicked")}
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
        elements={[
          <img
            src={reduxLogo}
            alt="React"
            className="h-16 md:h-24 w-auto mx-8"
          />,
          <img
            src={hookForm}
            alt="Next.js"
            className="h-16 md:h-24 w-auto mx-8"
          />,
          <img
            src={jiraLogo}
            alt="Next.js"
            className="h-16 md:h-24 w-auto mx-8"
          />,
          <img
            src={tailwindLogo}
            alt="Next.js"
            className="h-16 md:h-24 w-auto mx-8"
          />,
          <img
            src={reactQueryLogo}
            alt="Next.js"
            className="h-16 md:h-24 w-auto mx-8"
          />,
          <img
            src={axiosLogo}
            alt="Next.js"
            className="h-24 md:h-44 w-auto mx-8"
          />,
          <img
            src={gitLogo}
            alt="Next.js"
            className="h-20 md:h-32 w-auto mx-8"
          />,
          <img
            src={githubLogo}
            alt="Next.js"
            className="h-16 md:h-24 w-auto mx-8 bg-white rounded-full"
          />,
          <img
            src={nextLogo}
            alt="Next.js"
            className="h-16 md:h-28 w-auto mx-8"
          />,
          <img
            src={reactLogo}
            alt="React"
            className="h-16 md:h-28 w-auto mx-8"
          />,
          <img
            src={jsLogo}
            alt="Next.js"
            className="h-16 md:h-24 w-auto mx-8"
          />,
          <img
            src={tsLogo}
            alt="Next.js"
            className="h-16 md:h-24 w-auto mx-8"
          />,
        ]}
        velocity={60}
        className="custom-scroll-text"
      />
      <SpaceForm />
      <div className="fixed left-6 top-6 md:scale-100 scale-75">
        <QuickAccess />
      </div>
    </>
  );
}

export default App;
