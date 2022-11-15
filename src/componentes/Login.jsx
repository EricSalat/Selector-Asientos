import React from "react";
import { Link } from "react-router-dom";
import { FlechaAtras } from "./Iconos";
import "../hojas-de-estilo/Login.css";

function Login() {
  return (
    <div className="container">
    <Link to="/">
        <FlechaAtras />
      </Link>
    <div class="login-page">
      <div class="form">
        <form class="register-form">
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <input type="text" placeholder="Email" />
          <button>create</button>
          <p class="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
        <form class="login-form">
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button>login</button>
          <p class="message">
            ¿No estás registrado? <a href="#">Crea una cuenta</a>
          </p>
        </form>
      </div>
    </div>
    </div>
  
  );
}

export default Login;
