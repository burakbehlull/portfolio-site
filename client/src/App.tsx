import Navbar from './components/Navbar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
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
        <Skills />
      </main>
    </div>
  );
}

export default App;
