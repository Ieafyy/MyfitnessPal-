import { useState } from "react";

const FoodGraph = ({ mealsData }) => {
  const value_percent =
    (mealsData.total_calories /
      Number(mealsData.total_calories_needed.replace(",", ""))) *
    100;

  const [showValue, setShowValue] = useState(0);

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
        {(
          mealsData.total_calories /
          Number(mealsData.total_calories_needed.replace(",", ""))
        ).toFixed(2) * 100}
        %
      </div>
    </div>
  );
};

export default FoodGraph;
