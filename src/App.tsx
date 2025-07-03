import "./App.css";
import Aurora from "./blocks/Backgrounds/Aurora/Aurora";
import ProfileCard from "./blocks/Components/ProfileCard/ProfileCard";
import QuickAccess from "./blocks/Components/QuickAccess/QuickAccess";
import ScrollVelocity from "./blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import styles from "./styles/Pattern.module.css";
import nextLogo from "../public/icons8-next-js.svg";
import reactLogo from "../public/react-svgrepo-com.svg";
import reduxLogo from '../public/icons8-redux.svg';
import jsLogo from '../public/javascript-svgrepo-com.svg'
import tsLogo from '../public/typescript-svgrepo-com.svg'
import hookForm from '../public/react-hook-form-logo-only.svg'
import axiosLogo from '../public/Axios--Streamline-Svg-Logos.svg'
import reactQueryLogo from '../public/React-Query-Icon--Streamline-Svg-Logos.svg'
import tailwindLogo from '../public/tailwindcss-mark.d52e9897.svg'
import gitLogo from '../public/Git--Streamline-Svg-Logos.svg'
import githubLogo from '../public/Github-Icon--Streamline-Svg-Logos.svg'
import jiraLogo from '../public/jira-svgrepo-com.svg'
import ExpCard from "./blocks/Components/experienceCard/ExpCard";

function App() {
  return (
    <>
      <div className={styles.container}>
      <Aurora blend={0.6} amplitude={1.0} speed={1} />
        <div className="w-fit m-auto ">
          <ProfileCard
            name="Pouya Koupaie"
            title="Frontend Developer"
            handle="javicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="../public/5992434445958897155-Photoroom.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
        <ScrollVelocity
          elements={[
            <img src={reduxLogo} alt="React" className="h-16 md:h-24 w-auto mx-8" />,
            <img src={hookForm} alt="Next.js" className="h-16 md:h-24 w-auto mx-8" />,
            <img src={jiraLogo} alt="Next.js" className="h-16 md:h-24 w-auto mx-8" />,
            <img src={tailwindLogo} alt="Next.js" className="h-16 md:h-24 w-auto mx-8" />,
            <img src={reactQueryLogo} alt="Next.js" className="h-16 md:h-24 w-auto mx-8" />,
            <img src={axiosLogo} alt="Next.js" className="h-24 md:h-44 w-auto mx-8" />,
            <img src={gitLogo} alt="Next.js" className="h-20 md:h-32 w-auto mx-8" />,
            <img src={githubLogo} alt="Next.js" className="h-16 md:h-24 w-auto mx-8 bg-white rounded-full" />,
            <img src={nextLogo} alt="Next.js" className="h-16 md:h-28 w-auto mx-8" />,
            <img src={reactLogo} alt="React" className="h-16 md:h-28 w-auto mx-8" />,
            <img src={jsLogo} alt="Next.js" className="h-16 md:h-24 w-auto mx-8" />,
            <img src={tsLogo} alt="Next.js" className="h-16 md:h-24 w-auto mx-8" />,
          ]}
          velocity={60}
          className="custom-scroll-text"
        />
        <div className="flex mb-6">
        <ExpCard/>
        <ExpCard/>
        </div>
      </div>
      <div className="fixed left-6 top-6 md:scale-100 scale-75">
        <QuickAccess />
      </div>
    </>
  );
}

export default App;
