import { useState } from "react";

const LoginModal = ({
  username,
  setUsername,
  setModalShow,
  onConfirmBtn,
  load,
  date,
}) => {
  const [loading, setLoading] = useState(load);

  const handleClick = async () => {
    setLoading(true);
    await onConfirmBtn();
    setLoading(false);
    setModalShow(false);
  };

  return (
    <div>
      {!loading ? (
        <div className="p-10 flex fixed flex-col bg-gray-300 rounded-xl items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <p className="text-3xl mb-10 text-center font-bold">
            Primeiro digite seu nome de usuário no MyfitnessPal:
          </p>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="border-2 border-black text-2xl text-black bg-white rounded-md px-2 py-2 w-8/12 "
            autoFocus
            placeholder="Nome de usuário"
            onKeyDown={(e) => {
              if (e.code == "Enter") {
                handleClick();
              }
            }}
          />
          <button
            id="submit-btn"
            onClick={() => handleClick()}
            className="mt-10 place-self-center border-2 border-black px-24 py-4 rounded-full font-bold text-2xl text-center duration-200 hover:scale-105"
          >
            Buscar
          </button>
        </div>
      ) : (
        <div className="p-10 flex fixed flex-col bg-gray-300 rounded-xl items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <span className="loading loading-dots loading-lg mb-5"></span>
          <p className="text-3xl mb-5 font-bold">{`${date.split("-")[2]}/${
            date.split("-")[1]
          }/${date.split("-")[0]}`}</p>
          <p className="text-2xl">
            Buscando dados de <strong className="text-3xl">{username}</strong>
          </p>
          <p className="text-xl mt-5 text-center">
            (Confira se o nome digitado existe no banco do MyfitnessPal)
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
