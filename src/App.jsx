import { useState } from "react";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  function toggleForm() {
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <div className="App">
      {isLoggedIn ? (
        <SignupPage toggleForm={toggleForm} />
      ) : (
        <LoginPage toggleForm={toggleForm} />
      )}
    </div>
  );
}
