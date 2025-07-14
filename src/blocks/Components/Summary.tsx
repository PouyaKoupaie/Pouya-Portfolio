import BlurText from "../TextAnimations/BlurText/BlurText";

export default function Summary() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Overview</h1>
      <BlurText animateBy="words" className="text-xl/10" delay={120}>
        <strong className="text-spaceBlue">Front-End Developer with 3 years</strong> of of hands-on experience crafting dynamic, responsive web applications using{" "}
        <strong className="text-spaceBlue">React.JS and Next.JS.</strong>{" "}
        Adept at creating pixel-perfect UIs. Strong collaborator with a user-first mindset and a proven track 
        effective team collaboration and consistently delivering innovative, high-quality solutions.
      </BlurText>
    </>
  );
}
