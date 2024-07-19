import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function App() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (userData) {
      console.log(userData);
    }
  }, [userData]);

  console.log(userData);

  return (
    <div className="App">
      {userData === undefined ? (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const res = jwtDecode(credentialResponse.credential);
            setUserData(res);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      ) : (
        <button
          onClick={() => {
            setUserData(undefined);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default App;
