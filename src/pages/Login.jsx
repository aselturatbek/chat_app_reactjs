import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Zchat</span>
        <span className="title">Giriş</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="şifre" />
          <button>Giriş</button>
          {err && <span>Oops!Herhalde yanlış giden bir şeyler var..</span>}
        </form>
        <p>Henüz bir hesabın yok mu? <Link to="/register">Kayıt ol!</Link></p>
      </div>
    </div>
  );
};

export default Login;
