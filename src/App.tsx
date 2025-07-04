import Aurora from "./blocks/Backgrounds/Aurora/Aurora";
import ProfileCard from "./blocks/Components/ProfileCard/ProfileCard";
import QuickAccess from "./blocks/Components/QuickAccess/QuickAccess";
import ScrollVelocity from "./blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import nextLogo from "../public/icons8-next-js.svg";
import reactLogo from "../public/react-svgrepo-com.svg";
import reduxLogo from "../public/icons8-redux.svg";
import jsLogo from "../public/javascript-svgrepo-com.svg";
import tsLogo from "../public/typescript-svgrepo-com.svg";
import hookForm from "../public/react-hook-form-logo-only.svg";
import axiosLogo from "../public/Axios--Streamline-Svg-Logos.svg";
import reactQueryLogo from "../public/React-Query-Icon--Streamline-Svg-Logos.svg";
import tailwindLogo from "../public/tailwindcss-mark.d52e9897.svg";
import gitLogo from "../public/Git--Streamline-Svg-Logos.svg";
import githubLogo from "../public/Github-Icon--Streamline-Svg-Logos.svg";
import jiraLogo from "../public/jira-svgrepo-com.svg";
import TerminalCard from "./blocks/Components/Terminal/TerminalCardNext";
import profileImage from "../public/5992434445958897155-Photoroom.png";
import TriangleBackground from "./blocks/Backgrounds/Aurora/triangle/TriangleBackground";
import Summary from "./blocks/Components/Summary";
import Form from "./blocks/Components/Form/Form";

function App() {
  return (
    <>
      <TriangleBackground />
      <Aurora blend={0.6} amplitude={1.0} speed={1} />
      <div className="w-full m-auto relative">
        <div className="flex flex-wrap md:justify-evenly gap-4">
          <div className="lg:w-1/4 md:w-1/3 w-2/3 m-auto md:m-0 flex flex-col justify-between pb-6 order-2 md:order-none">
            <div className="text-emerald-300">
              <Summary />
            </div>
            <TerminalCard />
          </div>
          <div className="order-none">
            <ProfileCard
              name="Pouya Koupaie"
              title="Frontend Developer"
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl={profileImage}
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
        </div>
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
      <Form/>
      <div className="fixed left-6 top-6 md:scale-100 scale-75">
        <QuickAccess />
      </div>
    </>
  );
}

export default App;
