const FoodTable = ({ mealsData }) => {
  return (
    <div className="w-full">
      {mealsData && mealsData.total_calories > 0 ? (
        <div className="my-10 text-xl ">
          <div className="mx-10 grid grid-cols-1 gap-10 mt-10">
            <div className="w-8/12">
              <h2 className="text-3xl mb-5 font-semibold border-b-4 pb-5">
                Café da manhã:{" "}
                {
                  mealsData.breakfast[mealsData.breakfast.length - 1]
                    .total_calories
                }{" "}
                kcal (
                {(
                  (mealsData.breakfast[mealsData.breakfast.length - 1]
                    .total_calories /
                    mealsData.total_calories) *
                  100
                ).toFixed(2)}
                % do consumo diário)
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
            <div className="w-8/12">
              <h2 className="text-3xl mb-5 font-semibold border-b-4 pb-5">
                Almoço:{" "}
                {mealsData.lunch[mealsData.lunch.length - 1].total_calories}{" "}
                kcal (
                {(
                  (mealsData.lunch[mealsData.lunch.length - 1].total_calories /
                    mealsData.total_calories) *
                  100
                ).toFixed(2)}
                % do consumo diário)
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
            <div className="w-8/12">
              <h2 className="text-3xl mb-5 font-semibold border-b-4 pb-5">
                Café da tarde:{" "}
                {mealsData.snacks[mealsData.snacks.length - 1].total_calories}{" "}
                kcal (
                {(
                  (mealsData.snacks[mealsData.snacks.length - 1]
                    .total_calories /
                    mealsData.total_calories) *
                  100
                ).toFixed(2)}
                % do consumo diário)
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
            <div className="w-8/12">
              <h2 className="text-3xl mb-5 font-semibold border-b-4 pb-5">
                Jantar:{" "}
                {mealsData.dinner[mealsData.dinner.length - 1].total_calories}{" "}
                kcal (
                {(
                  (mealsData.dinner[mealsData.dinner.length - 1]
                    .total_calories /
                    mealsData.total_calories) *
                  100
                ).toFixed(2)}
                % do consumo diário)
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
      ) : (
        <div>
          <p className="text-center text-5xl font-bold mt-10">Ops!</p>
          <p className="text-center my-5 text-2xl">
            Parece que não foi encontrado nenhum alimento esse dia...
          </p>
        </div>
      )}
    </div>
  );
};

export default FoodTable;
