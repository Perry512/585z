import './App.css'
import Header from './components/Header';
import Home from './pages/Home';
import Links from './pages/Links';
import Meet from './pages/Meet';
import Who from './pages/Who';
import Footer from './components/Footer';
import ContactFormPage from './pages/ContactFormPage';

function App() {

  return (
    <div className="w-full">
      <Header />
      <Home />
      <Who />
      <Meet />
      <ContactFormPage />
      <Links />
      <Footer />
    </div>
  )
}

export default App;
