import React, { useEffect, useState } from "react";
import "./Popular.css";
import Button from "../../UI/Button/Button";
import { useSprings, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import TextAnimation from "../../UI/TextAnimation/TextAnimation";

import imagep1 from "./images/image-p1.jpg";
import imagep2 from "./images/image-p2.jpg";
import imagep3 from "./images/image-p3.jpg";
import imagep4 from "./images/image-p4.jpg";

export default function Popular() {
  const [enter, setEnter] = useState(false);
  const images = [
    { img: imagep1, title: "パリ" },
    { img: imagep2, title: "ニューヨーク" },
    { img: imagep3, title: "香港" },
    { img: imagep4, title: "大阪" },
  ];
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const items = images.map((_, index) => ({
    to: {
      transform: enter ? "translateY(0)" : "translateY(10px)",
      opacity: enter ? 1 : 0,
    },
    from: {
      transform: "translateY(10px)",
      opacity: 0,
    },
    delay: index * 200,
  }));
  const springs = useSprings(
    images.length,
    items.map((item) => item)
  );

  useEffect(() => {
    if (inView) setEnter(true);
  }, [inView]);

  return (
    <div className='Popular'>
      <div className='popularHeader'>
        <h2>
          <TextAnimation content='Popular Place' inView={inView} />
        </h2>
        <p>
          <TextAnimation
            content='人気の観光地で宿泊先を見つけましょう'
            inView={inView}
          />
        </p>
      </div>
      <div className='popularInner'>
        <div className='popularContainer' ref={ref}>
          {springs.map((prop, index) => (
            <animated.div className='popularItem' style={prop} key={index}>
              <div className='popularImage'>
                <img src={images[index].img} alt='' />
              </div>
              <div className='popularTitle'>{images[index].title}</div>
            </animated.div>
          ))}
          <div className='seek'>
            <Button content='一覧から探す' />
          </div>
        </div>
      </div>
    </div>
  );
}
