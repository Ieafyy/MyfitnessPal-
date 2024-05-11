import { useEffect, useState } from "react";

const easeInOut = (t) => t * t * (3 - 2 * t);

const FoodGraph = ({ mealsData }) => {
  const value_percent =
    (mealsData.total_calories /
      Number(mealsData.total_calories_needed.replace(",", ""))) *
    100;

  const [showValue, setShowValue] = useState(0);

  useEffect(() => {
    let startTime;
    const duration = 750;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = easeInOut(Math.min(progress / duration, 1));
      setShowValue(Math.floor(percentage * value_percent));
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      setShowValue(0);
    };
  }, [value_percent]);

  return (
    <div className="place-self-center justify-self-center z-0 my-10">
      <div
        className="radial-progress z-0 text-5xl"
        style={{
          "--value": showValue,

          "--size": "20rem",
          "--thickness": "12px",
        }}
        role="progressbar"
      >
        {showValue.toFixed(0)}%
      </div>
    </div>
  );
};

export default FoodGraph;
