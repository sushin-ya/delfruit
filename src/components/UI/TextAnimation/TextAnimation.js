import React from "react";
import { useSprings, animated } from "react-spring";
import "./TextAnimation.css";

export default function TextAnimation({ content, inView }) {
  const letters = content.split("", content.length);
  const items = letters.map((_, index) => ({
    to: {
      transform: inView ? "translateY(0)" : "translateY(-100px)",
      opacity: inView ? 1 : 0,
    },
    from: {
      transform: "translateY(-100px)",
      opacity: 0,
    },
    delay: index * 100,
  }));
  const springs = useSprings(
    letters.length,
    items.map((item) => item)
  );

  return (
    <>
      {springs.map((props, index) => (
        <animated.span className='char' style={props} key={index}>
          {letters[index]}
        </animated.span>
      ))}
    </>
  );
}
