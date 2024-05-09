const FoodHeader = ({ mealsData }) => {
  return (
    <p
      className={`my-10 text-4xl font-bold mb-5 sticky top-0 py-10 px-10 ${
        mealsData.total_calories <
        Number(mealsData.total_calories_needed.replace(",", ""))
          ? "bg-green-400"
          : "bg-red-400"
      }`}
    >
      Calorias Totais do dia: {mealsData.total_calories} Kcal / Calorias
      necessárias do dia:{" "}
      {Number(mealsData.total_calories_needed.replace(",", ""))} Kcal
    </p>
  );
};

export default FoodHeader;
