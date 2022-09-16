import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.scss';


const Login = () => {

  const[inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const handleInput = event => {
    const {name, value} = event.target;
    setInputValue ({ ...inputValue, [name] : value});
  }

  const isValid = inputValue.email.includes('@') > 0 && inputValue.password.length >= 5;
  console.log(isValid)

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('./main');
  }

  return(
    <div className="login">
      <div className="login-main">
        <div className="login-inner">

          <div className="login-logo">
            Facebook
          </div>

          <div className="login-input">
            <input 
            className="login-id"
            type="text" 
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleInput}
            value={inputValue.email}
            name="email"
            />

            <input 
            className="login-password"
            type="password" 
            placeholder="비밀번호" 
            value={inputValue.password}
            onChange={handleInput}
            name="password"
            />

            <button 
            className="login-button"
            disabled={!isValid}
            onClick={goToMain}
            >로그인
            </button>
            <div className="login-password-lost">비밀번호를 잊으셨나요?</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;