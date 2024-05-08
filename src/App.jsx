import { useState, React, useEffect } from "react";
function App() {
  const [user, setUser] = useState("");
  const [mealsData, setMealsData] = useState(null);
  const [flag, setFlag] = useState(false);

  const handlerequest = () => {
    let url = "http://127.0.0.1:5000/getdata?userid=" + user;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMealsData(data);
      });
  };

  useEffect(() => {
    console.log(mealsData);
  }, [mealsData]);

  return (
    <>
      <p onClick={() => handlerequest()}>Read Data</p>
      <input
        type="text"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
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
}

export default App;
