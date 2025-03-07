import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { gapi } from 'gapi-script';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Denied from '../components/denied/Denied';

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const clientId1 = "639044841839-ddle5ha663v3qd44d8rphotrnkjj59n9.apps.googleusercontent.com";

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        client_id: clientId1,
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (res) => {
    console.log(res);
    setLoginError(false);
    navigate("/dashboart"); // Redirige al dashboard
  };

  const onFailure = () => {
    console.log("Login failed");
    setLoginError(true); // Se activa la advertencia
  };

  const validate = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error en la autenticación");
      }

      console.log("Login exitoso:", data.user);
      setLoginError(false);
      navigate("/dashboart");

    } catch (error) {
      console.error("Error en la validación:", error);
      setLoginError(true); // Se activa la advertencia en caso de error
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: 'url(/Administrator/img/fondo_login.jpg)',
      }}
    >
      <div className="login-box">
        
        <h1 className="login-title">Login</h1>
        <div className="login-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {/* Renderiza la advertencia solo cuando loginError es true */}
        {loginError && <Denied show={true} />}
          <div className="options">
            
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>
          <button className="login-button" type="button" onClick={validate}>
            Login
          </button>
          {/* Login con Google */}
          <GoogleOAuthProvider clientId={clientId1}>
            <GoogleLogin
              onSuccess={onSuccess}
              onFailure={onFailure}
              onError={() => console.log("Error al iniciar sesión con Google")}
            />
          </GoogleOAuthProvider>
          <p className="register-link">
            Don't have an account?{" "}
            <Link to="/register" className="register-link-highlight">
              Register
            </Link>
          </p>
          
        </div>
      </div>
    </div>
  );
}
