import React from "react";
import "./Travel.css";

import img from "./images/image-travel.jpg";
import CoverSlideImage from "../../UI/CoverSlideImage/CoverSlideImage";
import Button from "../../UI/Button/Button";

export default function Travel() {
  return (
    <div className='travel'>
      <div className='travelInner'>
        <div className='travelImage'>
          <CoverSlideImage image={img} type='image' />
        </div>
        <div className='travelTexts'>
          <div className='travelTextsInner'>
            <div className='travelTitle'>
              <span className='purple'>Travel</span>
              <span>the world</span>
            </div>
            <div className='travelSub'>世界中を旅しよう</div>
            <div className='travelDescription'>
              <p>
                世界１５０ヶ国で
                <br />
                利用できる民泊サービスです。
              </p>
              <p>あなたの望む宿がきっと見つかります。</p>
            </div>
            <Button content='もっと詳しく' />
          </div>
        </div>
      </div>
    </div>
  );
}
