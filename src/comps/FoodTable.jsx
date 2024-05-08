import React from "react";

const FoodTable = ({ mealsData }) => {
  return (
    <>
      {mealsData ? (
        <div className="my-10 text-xl">
          <p className="text-4xl font-bold mb-5 sticky top-0 mx-0 bg-white py-10 border-b-4 px-10">
            Calorias Totais do dia: {mealsData.total_calories} Kcal
          </p>
          <div className="mx-10 grid grid-cols-1 gap-10 mt-10">
            <div className="w-1/2">
              <h2 className="text-3xl mb-5 font-semibold border-b-4 pb-5">
                Café da manhã:{" "}
                {
                  mealsData.breakfast[mealsData.breakfast.length - 1]
                    .total_calories
                }{" "}
                kcal
              </h2>
              {mealsData.breakfast.map((item) => {
                if (item.item != null)
                  return (
                    <div key={item.item} className="flex gap-10">
                      <p className="font-medium">{item.calories} Kcal</p>
                      <p>{item.item}</p>
                    </div>
                  );
              })}
            </div>
            <div className="w-1/2">
              <h2 className="text-3xl mb-5 font-semibold border-b-4 pb-5">
                Almoço:{" "}
                {mealsData.lunch[mealsData.lunch.length - 1].total_calories}{" "}
                kcal
              </h2>
              {mealsData.lunch.map((item) => {
                if (item.item != null)
                  return (
                    <div key={item.item} className="flex gap-10">
                      <p className="font-medium">{item.calories} Kcal</p>
                      <p>{item.item}</p>
                    </div>
                  );
              })}
            </div>
            <div className="w-1/2">
              <h2 className="text-3xl mb-5 font-semibold border-b-4 pb-5">
                Café da tarde:{" "}
                {mealsData.snacks[mealsData.snacks.length - 1].total_calories}{" "}
                kcal
              </h2>
              {mealsData.snacks.map((item) => {
                if (item.item != null)
                  return (
                    <div key={item.item} className="flex gap-10">
                      <p className="font-medium">{item.calories} Kcal</p>
                      <p>{item.item}</p>
                    </div>
                  );
              })}
            </div>
            <div className="w-1/2">
              <h2 className="text-3xl mb-5 font-semibold border-b-4 pb-5">
                Jantar:{" "}
                {mealsData.dinner[mealsData.dinner.length - 1].total_calories}{" "}
                kcal
              </h2>
              {mealsData.dinner.map((item) => {
                if (item.item != null)
                  return (
                    <div key={item.item} className="flex gap-10">
                      <p className="font-medium">{item.calories} Kcal</p>
                      <p>{item.item}</p>
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FoodTable;
