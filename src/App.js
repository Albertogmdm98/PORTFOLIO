import './App.css';
import About from './components/About';
import Companies from './components/Companies';
import Footer from './components/Footer';
import Menu from './components/Menu';
import ButtonUp from './components/ButtonUp';

function App() {
  return (
    <div className="App">
      <Menu />
      <About />
      <div id='experiencia'>
        <h1>Experiencia</h1>
        <Companies />
      </div>
      <ButtonUp />
      <Footer />
    </div>
  );
}

export default App;
