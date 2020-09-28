import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from './components/Layouts/main-layout';

function App() {
  return (
    <>
      <Router>
        <MainLayout/>
      </Router>
    </>
  );
}

export default App;
