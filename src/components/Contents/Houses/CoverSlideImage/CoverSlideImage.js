import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import "./CoverSlideImage.css";

export default function CoverSlideImage({ image }) {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const { x } = useSpring({
    from: { x: 0 },
    to: { x: inView ? 1 : 0 },
    config: { duration: 1600, easing: (t) => -(Math.cos(Math.PI * t) - 1) / 2 },
    reset: true,
  });
  const { left, right } = useSpring({
    from: { left: 0, right: 0 },
    to: { left: inView ? 1 : 0, right: inView ? 1 : 0 },
    config: { duration: 1600, easing: (t) => -(Math.cos(Math.PI * t) - 1) / 2 },
    reset: true,
  });

  return (
    <>
      <div ref={ref}>
        <div className={inView ? "coverSlides hoverDarken" : "coverSlides"}>
          <animated.img
            className='imgZoom'
            style={{
              opacity: x.interpolate({
                range: [0, 0.5, 0.51, 1],
                output: [0, 0, 1, 1],
              }),
              transform: x
                .interpolate({
                  range: [0, 0.5, 0.51, 1],
                  output: [1.5, 1.5, 1.5, 1],
                })
                .interpolate((x) => `scale(${x})`),
            }}
            src={image}
            alt=''
          />
          <animated.div
            className='coverSlide'
            style={{
              left: left.interpolate({
                range: [0, 0.5, 1],
                output: ["0%", "0%", "100%"],
              }),
              right: right.interpolate({
                range: [0, 0.5, 1],
                output: ["100%", "0%", "0%"],
              }),
            }}
          />
        </div>
      </div>
    </>
  );
}
