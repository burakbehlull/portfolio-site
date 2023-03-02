import Navbar from './components/Navbar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
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
        <Projects />
      </main>
    </div>
  );
}

export default App;
