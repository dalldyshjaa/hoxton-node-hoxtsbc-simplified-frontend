import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SignedOutPage } from "./pages/SignedOutPage";
import { SignedInPage } from "./pages/SignedInPage";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  function signIn(user: any) {
    console.log(user);
    setCurrentUser(user.user);
    localStorage.token = user.token;
  }

  useEffect(() => {
    if (localStorage.token) {
      fetch("http://localhost:3001/validate", {
        method: "POST",
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            alert("balls");
          } else {
            signIn(data);
          }
        });
    }
  }, []);

  return (
    <div className="App">
      {currentUser ? (
        <SignedInPage user={currentUser} />
      ) : (
        <SignedOutPage signIn={signIn} />
      )}
    </div>
  );
}

export default App;
