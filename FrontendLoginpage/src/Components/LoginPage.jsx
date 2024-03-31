import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ValidateContext } from "../App";

export default function LoginPage() {
  const [obj, setObj] = useState({ name: "", pass: "" });
  const [arr, setArr] = useState([]);
  const { check, setCheck } = useContext(ValidateContext);
  const navigate = useNavigate();
  let flag = 0;

  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((res) => res.json())
      .then((data) => setArr(data))
      .catch((error) => console.log(error));

    if (localStorage.getItem("key") == "token") {
      navigate("/home");
    }
  }, []);

  function onClickHandle() {
    arr.map((item) => {
      if (obj.name === item.userName && obj.pass === item.userPass) {
        flag = 1;
      }
    });
    if (flag === 1) {
      localStorage.setItem("name1", obj.name);
      localStorage.setItem("key", "token");
      flag = 0;
      setCheck("checked");
      navigate("/home");
    } else {
      alert("Incorrect Credential");
    }
  }
  return (
    <>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Enter your Username"
        value={obj.name}
        onChange={(e) => {
          setObj({ ...obj, name: e.target.value });
        }}
      />
      <br />
      <input
        type="password"
        placeholder="Enter your Password"
        value={obj.pass}
        onChange={(e) => {
          setObj({ ...obj, pass: e.target.value });
        }}
      />
      <br />
      <button onClick={onClickHandle}>Submit</button>
    </>
  );
}
