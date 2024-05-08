import { useEffect, useState } from "react";
import FoodTable from "./comps/FoodTable";
import LoginModal from "./comps/LoginModal";
function App() {
  const [username, setUsername] = useState("");
  const [mealsData, setMealsData] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const today = new Date();
  const todayDate = `${today.getFullYear()}-${
    today.getMonth() > 9 ? today.getMonth() + 1 : "0" + (today.getMonth() + 1)
  }-${today.getDate() > 9 ? today.getDate() : "0" + today.getDate()}`;

  const [date, setDate] = useState(todayDate);

  useEffect(() => {
    if (mealsData) {
      handleRequest();
    }
  }, [date]);

  const handleRequest = async () => {
    setLoading(true);
    let url =
      "http://127.0.0.1:5000/getdata?userid=" + username + "&date=" + date;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMealsData(data);
        setLoading(false);
      });
  };

  return (
    <div className="font-montserrat grid">
      <h1 className="text-center text-7xl font-semibold mt-10">
        MyfitnessPal++
      </h1>
      <p className="mt-10 text-center text-2xl">
        Traga seus dados do MyfitnessPal para visualiza-los e ter mais insights
      </p>
      <button
        onClick={() => setModalShow(true)}
        className="mt-10 place-self-center border-2 border-black px-24 py-4 rounded-full font-bold text-2xl text-center"
      >
        Puxar os dados!
      </button>
      {(modalShow || loading) && (
        <LoginModal
          username={username}
          setUsername={setUsername}
          setModalShow={setModalShow}
          onConfirmBtn={handleRequest}
          load={loading}
          date={date}
        />
      )}
      {mealsData && (
        <div className="flex text-2xl place-self-center mt-24 gap-10">
          <p className="font-bold text-4xl">Data: </p>
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className=" border-b-2 border-black"
          />
        </div>
      )}
      <FoodTable mealsData={mealsData} />
    </div>
  );
}

export default App;
