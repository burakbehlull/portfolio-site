import React, { useMemo } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';
import './App.scss';
function App() {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>

      <main>
        <Header />
        <About />

      </main>
    </div>
  );
}

export default App;
