import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ValidateContext } from "../App";

export default function Home() {
  const navigate = useNavigate();
  const { check, setCheck } = useContext(ValidateContext);
  console.log(check);
  function clickHandle() {
    localStorage.removeItem("key");
    localStorage.removeItem("name1");
    navigate("/");
  }
  useEffect(() => {
    if (check != "token" && localStorage.getItem("key") != "token") {
      navigate("/");
    }
  }, [check]);

  return (
    <>
      {localStorage.getItem("key") === "token" ? (
        <div>
          <h1>This is Homepage</h1>
          <p>Welcome {localStorage.getItem("name1")}</p>
          <button onClick={clickHandle}>Logout</button>
        </div>
      ) : null}
    </>
  );
}
