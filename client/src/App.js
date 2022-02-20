

import { useState } from "react";
import Axios from "axios"

function App() {

  const [registerUser, setRegisterUser] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUser, setLoginUser] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");


  const register = () => {
    Axios.post("http://localhost:3001/register", {user:registerUser,password:registerPassword})
      .then((res) => {
        console.log(res)
      
      })
      .catch((err) => {
        console.log(err);
      
      })
    
  console.log(registerUser + registerPassword);

    
  }

  const login = () => {
    Axios.post("http://localhost:3001/login", { user: loginUser, password: loginPassword })
      .then((res) => {
        console.log(res);
        if (res.data.message) {
          setLoginStatus(res.data.message);
          console.log(res.data.message);
        }
        else {
          setLoginStatus(res.data[0].user);
          console.log("user found");
          console.log(res.data[0].user);
        }
      })
      .catch((err) => {
        
          console.log(err);
    })
  }



  return (
    <div className="App">
      <div className="register">
        <h1>Register</h1>
        <label>UserId</label>
        <input
          onChange={(e) => {
            setRegisterUser(e.target.value);
          }}
          placeholder="userId"
        />

        <label>Password</label>
        <input
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
          placeholder="password"
        />

        <button onClick={register}>Register</button>
      </div>

      <div className="login">
        <h1>Login</h1>
        <label>UserId</label>
        <input
          onChange={(e) => {
            setLoginUser(e.target.value);
          }}
          placeholder="userId"
        />
        <label>Password</label>
        <input
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
          placeholder="password"
        />
        <button onClick={login}>Login</button>
        <h1>{loginStatus}</h1>
      </div>
    </div>
  );
}

export default App;
