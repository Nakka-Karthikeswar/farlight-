// import { useRef, useState } from "react";
// import React from "react";
// import Slider from "slick-slider-react"

// export default function Wapper(){
//     const [index, setIndex] = useState(0)
//     let sliderRef = useRef(null);
//     const play = () => {
//       sliderRef.slickPlay();
//     };
//     const pause = () => {
//       sliderRef.slickPause();
//     };
  
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000
//     };
//     return(
//         <>
//          <Slider index={index} onSlide={setIndex}>
//             <div className="w-[200px] h-[100px]">
            
//                 <img src="images/qrcode-5.png"  alt="e"/>
//             </div>
//             <div className="w-[200px] h-[100px]">
//             <img src="images/index-two-btns.png"  alt="e"/>
//             </div>
//             <div className="w-[200px] h-[100px]">
//             <img src="images/index-three-btns.png"  alt="e"/>
//             </div>
//             <div className="w-[200px] h-[100px]">
//             <img src="images/index-four-btns.png"  alt="e"/>
//             </div>
//         </Slider>
//         </>
//     )
// }

import React from "react";
import Slider from "react-slick";
// import Slider from "slick-slider-react";

import "./wapper.css"

export default function Wrapper() {
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow:6,
    slidesToScroll: 1 ,
    autoplay: true,
    autoplaySpeed: 200,
  };
  return (
    <Slider {...settings}>
      <div>
      <img src="images/index-two-btns.png"  alt="e"/>
      </div>
      <div>
      <img src="images/index-three-btns.png"  alt="e"/>
      </div>
      <div>
      <img src="images/index-four-btns.png"  alt="e"/>
      </div>
      <div>
      <img src="images/index-five-btns.png"  alt="e"/>
      </div>
      <div>
      <img src="images/index-six-btns.png"  alt="e"/>
      </div>
      <div>
      <img src="images/index-seven-btns.png"  alt="e"/>
      </div>

      <div>
      <img src="images/index-two-btns.png"  alt="e"/>
      </div>
      <div>
      <img src="images/index-three-btns.png"  alt="e"/>
      </div>
      <div>
      <img src="images/index-four-btns.png"  alt="e"/>
      </div>
      <div>
      <img src="images/index-five-btns.png"  alt="e"/>
      </div>
      <div>
      <img src="images/index-six-btns.png"  alt="e"/>
      </div>
      <div>
      <img src="images/index-seven-btns.png"  alt="e"/>
      </div>
      <div>
      <img src="images/index-two-btns.png"  alt="e"/>
      </div>
      <div>
      <img src="images/index-three-btns.png"  alt="e"/>
      </div>
      <div>
      <img src="images/index-four-btns.png"  alt="e"/>
      </div>
      <div>
      <img src="images/index-five-btns.png"  alt="e"/>
      </div>
      <div>
      <img src="images/index-six-btns.png"  alt="e"/>
      </div>
      <div>
      <img src="images/index-seven-btns.png"  alt="e"/>
      </div>
    </Slider>
  );
}