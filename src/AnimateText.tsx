import RotatingText from './blocks/TextAnimations/RotatingText/RotatingText'

export default function AnimateText() {
  return (
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
  )
}
