import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login/Login';
import Main from './Main/Main'

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/main" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
