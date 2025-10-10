import React from 'react';
import Home from '../Pages/Home.jsx';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
