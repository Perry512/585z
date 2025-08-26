import './App.css'
import Header from './components/Header';
import Home from './Pages/Home';
import Links from './Pages/Links';
import Meet from './Pages/Meet';
import Who from './Pages/Who';
import Footer from './components/Footer';
import ContactFormPage from './Pages/ContactFormPage';

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
