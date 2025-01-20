import './App.css';
import About from './components/About';
import Companies from './components/Companies';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <About />
      <Companies />
      <Footer />
    </div>
  );
}

export default App;
