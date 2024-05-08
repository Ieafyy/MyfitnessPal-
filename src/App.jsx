import { useState } from "react";
import FoodTable from "./comps/FoodTable";
import LoginModal from "./comps/LoginModal";
function App() {
  const [username, setUsername] = useState("");
  const [mealsData, setMealsData] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleRequest = async () => {
    let url = "http://127.0.0.1:5000/getdata?userid=" + username;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMealsData(data);
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
      {modalShow && (
        <LoginModal
          username={username}
          setUsername={setUsername}
          setModalShow={setModalShow}
          onConfirmBtn={handleRequest}
        />
      )}

      <FoodTable mealsData={mealsData} />
    </div>
  );
}

export default App;
