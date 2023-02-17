import React, { useMemo } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/NavBar';
import './App.scss';
import Header from './components/Header/Header';
function App() {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>

      <main>
        <Header />

      </main>
    </div>
  );
}

export default App;
