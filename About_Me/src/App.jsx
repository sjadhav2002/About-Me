import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Home from './Pages/home/home';
// import { ListProvider } from './components/ListContext';  // Import the ListProvider
function App() {
  return (
    <>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
    </>
  );
}

export default App;