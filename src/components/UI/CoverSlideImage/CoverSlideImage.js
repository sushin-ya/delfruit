import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import "./CoverSlideImage.css";

export default function CoverSlideImage({ image, type }) {
  const [ref, inView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
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

  let animatedComponent;

  if (type === "div") {
    animatedComponent = (
      <>
        <animated.div
          className='imgZoom'
          style={{
            backgroundImage: `url(${image})`,
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
      </>
    );
  } else {
    animatedComponent = (
      <>
        {" "}
        <animated.img
          className='imgZoom image'
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
      </>
    );
  }

  return (
    <div
      ref={ref}
      className={inView ? "coverSlides hoverDarken " : "coverSlides"}
    >
      {animatedComponent}
    </div>
  );
}
