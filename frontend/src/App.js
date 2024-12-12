import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header';
import Services from './Pages/Services';
import AboutUs from './Pages/AboutUs';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
