import React from "react";

const MealGraph = ({ mealsData }) => {
  return (
    <div className="place-self-center justify-self-center mx-40">
      <p>Café da manhã</p>
      <progress
        class="progress progress-success w-56"
        value="50"
        max="100"
      ></progress>
      <br />
      <p>Almoço</p>
      <progress
        class="progress progress-success w-56"
        value="50"
        max="100"
      ></progress>
      <p>Lanche da tarde</p>
      <progress
        class="progress progress-success w-56"
        value="50"
        max="100"
      ></progress>
      <p>Jantar</p>
      <progress
        class="progress progress-success w-56"
        value="50"
        max="100"
      ></progress>
    </div>
  );
};

export default MealGraph;
