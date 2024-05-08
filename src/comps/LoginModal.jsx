import React, { useState } from "react";

const LoginModal = ({ username, setUsername, setModalShow, onConfirmBtn }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await onConfirmBtn();
    setLoading(false);
    setModalShow(false);
  };

  return (
    <>
      {!loading ? (
        <div className="p-10 flex fixed flex-col bg-red-700 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-2xl">
            Primeiro digite seu nome de usuário no MyfitnessPal:
          </p>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="border-2 border-black text-xl rounded-md px-2 w-5/12"
          />
          <button
            onClick={() => handleClick()}
            className="mt-10 place-self-center border-2 border-black px-24 py-4 rounded-full font-bold text-2xl text-center"
          >
            Buscar
          </button>
        </div>
      ) : (
        <div className="p-10 flex fixed flex-col bg-red-700 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p>
            Buscando dados de <strong>{username}</strong>
          </p>
          <p>(Cheque se o nome digitado existe no banco do MyfitnessPal)</p>
        </div>
      )}
    </>
  );
};

export default LoginModal;
