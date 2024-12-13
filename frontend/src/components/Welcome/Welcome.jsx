import { useState, useEffect } from "react";
import leftChevron from "../../assets/icons/left-arrow.svg";
import rightChevron from "../../assets/icons/right-arrow.svg";
import "./Welcome.css";

export default function Welcome() {
  // État pour l'index du slider, initialisé à 1
  const sliderData = [
    {
      id: 1,
      description: "Living room",
    },
    {
      id: 2,
      description: "Kitchen",
    },
    {
      id: 3,
      description: "Bedroom",
    },
    {
      id: 4,
      description: "Bathroom",
    },
    {
      id: 5,
      description: "Balcony",
    },
  ];
  const [sliderIndex, setSliderIndex] = useState(1);
  function toggleImage(indexPayload) {
    setSliderIndex((state) => {
      if (indexPayload + state > sliderData.length) {
        return 1;
      } else if (indexPayload + state < 1) {
        return sliderData.length;
      } else {
        return state + indexPayload;
      }
    });
  }

  useEffect(() => {
    const intervalID = setInterval(() => toggleImage(1), 2000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <div className="slider">
        <p className="image-info">
          {sliderData.find((obj) => obj.id === sliderIndex).description}
        </p>
        <img
          src={`/images/img-${sliderIndex}.jpg`}
          alt="estate's rooms"
          className="slider-img"
        />
        <button
          onClick={() => toggleImage(-1)}
          className="navigation-button prev-button"
        >
          <img src={leftChevron} alt="previous image" />
        </button>
        <button
          onClick={() => toggleImage(1)}
          className="navigation-button next-button"
        >
          <img src={rightChevron} alt="next-image" />
        </button>
      </div>
    </>
  );
}
