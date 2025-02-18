import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';

export default function LoginPage() {
  const navigate = useNavigate(); // Inicializa useNavigate
  const [showPassword, setShowPassword] = useState(false);

  const clientId = "639044841839-ddle5ha663v3qd44d8rphotrnkjj59n9.apps.googleusercontent.com";

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        client_id: clientId,
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (res) => {
    console.log(res);
    navigate("/dashboart"); // Redirige al dashboard
  };

  const onFailure = () => {
    console.log("Login failed");
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
            />
          </div>
          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input-field"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>
          <button className="login-button">Login</button>
          {/* Login con Google */}
          <GoogleLogin
            clientId={clientId} // Corregido
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"} // Corregido
          />
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