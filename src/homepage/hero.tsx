import React, { useState } from "react";
import slide1 from "./Group 20.png"
import slide2 from "./image 1.png"
import slide3 from "./image 9.png"
function carousel() {
 const images = [slide1,slide2,slide3]

 const [currentIndex, setCurrentIndex] = useState<number>(0)
 const handlePrev = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleNext = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
}

export default carousel;