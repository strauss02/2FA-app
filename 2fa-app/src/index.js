import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginPage from './components/LoginPage';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="homepage" element={<Homepage />} />
      <Route path="2fa" element={<AuthenticationPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
