// import BlurText from "../TextAnimations/BlurText/BlurText";

export default function Summary() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Summary</h1>
      {/* <BlurText
        text="Isn't this so cool?!"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl mb-8"
      /> */}
      <p className="text-xl/10 ">
        Front-End Developer with{" "}
        <strong className="text-spaceBlue"> 3 years</strong> of experience in
        developing Single-Page Applications (SPAs) using{" "}
        <strong className="text-spaceBlue">React and Next JS.</strong>{" "}
        Demonstrated ability to collaborate effectively as a team member,
        consistently delivering high-quality and innovative solutions. Leveraged
        various libraries to enhance performance and development speed
      </p>
    </>
  );
}
