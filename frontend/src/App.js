import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header';
import Services from './Pages/Services';
import AboutUs from './Pages/AboutUs';
import Footer from './Pages/Footer';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <AboutUs />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
