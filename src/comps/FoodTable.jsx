import React from "react";

const FoodTable = ({ mealsData }) => {
  return (
    <>
      {mealsData ? (
        <div>
          <div>
            <h2>
              Café da manhã:{" "}
              {
                mealsData.breakfast[mealsData.breakfast.length - 1]
                  .total_calories
              }{" "}
              kcal
            </h2>
          </div>
          <div>
            <h2>
              Almoço:{" "}
              {mealsData.lunch[mealsData.lunch.length - 1].total_calories} kcal
            </h2>
          </div>
          <div>
            <h2>
              Lanche da tarde:
              {
                mealsData.snacks[mealsData.snacks.length - 1].total_calories
              }{" "}
              kcal
            </h2>
          </div>
          <div>
            <h2>
              Jantar{" "}
              {mealsData.dinner[mealsData.dinner.length - 1].total_calories}{" "}
              kcal
            </h2>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FoodTable;
