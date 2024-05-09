import { useEffect, useState } from "react";
import FoodTable from "./comps/FoodTable";
import LoginModal from "./comps/LoginModal";
import { AnimatePresence, motion } from "framer-motion";
import FoodHeader from "./comps/FoodHeader";
import Footer from "./comps/Footer";
function App() {
  const [username, setUsername] = useState("");
  const [mealsData, setMealsData] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notFirstTime, setNotFirstTime] = useState(false);

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
        setNotFirstTime(true);
        if (data?.status != "error") setMealsData(data);
        else {
          setDate(todayDate);
          setMealsData(null);
        }
        setLoading(false);
      });
  };

  return (
    <div className="font-montserrat grid mb-20">
      <h1 className="text-center text-7xl font-bold mt-10">MyfitnessPal++</h1>
      <p className="mt-10 text-center text-2xl">
        Traga seus dados do MyfitnessPal para visualiza-los e ter mais insights
      </p>
      <motion.button
        onClick={() => setModalShow(true)}
        className="mt-10 place-self-center border-2 border-black px-24 py-4 rounded-full font-bold text-2xl text-center"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        Buscar
      </motion.button>
      <AnimatePresence>
        {(modalShow || loading) && (
          <motion.div
            initial={{ y: -100 }}
            whileInView={{ y: 100 }}
            exit={{ y: -100, opacity: 0 }}
            className="z-20"
          >
            <LoginModal
              username={username}
              setUsername={setUsername}
              setModalShow={setModalShow}
              onConfirmBtn={handleRequest}
              load={loading}
              date={date}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {mealsData && (
        <div className="flex text-2xl place-self-center mt-24 gap-10">
          <p className="font-bold text-4xl">Data: </p>
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="border-b-2 border-slate-900 bg-transparent"
          />
        </div>
      )}
      {mealsData && (
        <div>
          <FoodHeader mealsData={mealsData} />
          <div className="flex">
            <FoodTable mealsData={mealsData} />
          </div>
        </div>
      )}
      {!mealsData && notFirstTime && (
        <div>
          <p className="text-center text-5xl font-bold mt-10">
            Erro na busca :(
          </p>
          <p className="text-center mt-5 text-2xl">
            Confira se o ID de usuário está correto e tente novamente
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
