import BlurText from "../TextAnimations/BlurText/BlurText";

export default function Summary() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Overview</h1>
      <BlurText animateBy="words" className="text-xl/10" delay={120}>
        Front-End Developer with{" "}
        <strong className="text-spaceBlue">3 years</strong> of experience in
        developing Single-Page Applications (SPAs) using{" "}
        <strong className="text-spaceBlue">React and Next JS.</strong>{" "}
        Demonstrated ability to collaborate effectively as a team member,
        consistently delivering high-quality and innovative solutions. Leveraged
        various libraries to enhance performance and development speed
      </BlurText>
    </>
  );
}
