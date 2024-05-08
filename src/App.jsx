import { useState } from "react";
function App() {
  const [user, setUser] = useState("");

  const handlerequest = () => {
    let url = "http://127.0.0.1:5000/getdata?userid=" + user;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <p onClick={() => handlerequest()}>Read Data</p>
      <input
        type="text"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
    </>
  );
}

export default App;
