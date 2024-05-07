import { useGoogleLogin } from "@react-oauth/google";
function App() {
  const getData = (login) => {
    fetch("https://www.googleapis.com/fitness/v1/users/me/dataSources", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${login.access_token}`,
      },
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  };

  const login = useGoogleLogin({
    onSuccess: (r) => {
      console.log(r);
      getData(r);
    },
    flow: "implicit",
  });

  return (
    <>
      <button onClick={() => login()}>Login com google</button>
    </>
  );
}

export default App;
