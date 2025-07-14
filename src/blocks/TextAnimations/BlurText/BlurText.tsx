import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import type { ReactNode } from "react";
import {
  useEffect,
  useRef,
  useState,
  useMemo,
  // children,
  isValidElement,
  cloneElement,
} from "react";

type BlurTextProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
};

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const animateText = (
  text: string,
  indexOffset: number,
  animateBy: "words" | "letters",
  animateKeyframes: Record<string, Array<string | number>>,
  fromSnapshot: Record<string, string | number>,
  totalDuration: number,
  delay: number,
  times: number[],
  easing: (t: number) => number,
  inView: boolean,
  onAnimationComplete?: () => void
) => {
  const segments = animateBy === "words" ? text.split(" ") : text.split("");
  return segments.map((segment, i) => {
    const index = indexOffset + i;
    const transition: Transition = {
      duration: totalDuration,
      times,
      delay: (index * delay) / 1000,
    };
    // eslint-disable-next-line
    (transition as any).ease = easing;

    return (
      <motion.span
        key={index}
        initial={fromSnapshot}
        animate={inView ? animateKeyframes : fromSnapshot}
        transition={transition}
        onAnimationComplete={
          index === indexOffset + segments.length - 1
            ? onAnimationComplete
            : undefined
        }
        style={{
          display: "inline-block",
          willChange: "transform, filter, opacity",
        }}
      >
        {segment === " " ? "\u00A0" : segment}
        {animateBy === "words" && i < segments.length - 1 && "\u00A0"}
      </motion.span>
    );
  });
};

const BlurText: React.FC<BlurTextProps> = ({
  children,
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  let indexOffset = 0;

  const renderChildren = (node: ReactNode): ReactNode => {
    if (typeof node === "string") {
      const animated = animateText(
        node,
        indexOffset,
        animateBy,
        buildKeyframes(fromSnapshot, toSnapshots),
        fromSnapshot,
        totalDuration,
        delay,
        times,
        easing,
        inView,
        onAnimationComplete
      );
      indexOffset += animated.length;
      return animated;
    }

    if (isValidElement(node)) {
      const element = node as React.ReactElement<{ children?: ReactNode }>;
      return cloneElement(element, {
        children: renderChildren(element.props.children),
      });
    }

    if (Array.isArray(node)) {
      return node.map(renderChildren);
    }

    return node;
  };

  return (
    <p ref={ref} className={`blur-text ${className} md:text-xl/10 text-lg/8 flex flex-wrap`}>
      {renderChildren(children)}
    </p>
  );
};

export default BlurText;
