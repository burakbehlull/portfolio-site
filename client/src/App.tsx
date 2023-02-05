import React from 'react';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import './App.scss';
import Header from './components/Header/Header';
function App() {
  return (
    <div className='App'>
      <header>
        <Nav />
      </header>

      <main>
        <Header />

      </main>
    </div>
  );
}

export default App;
