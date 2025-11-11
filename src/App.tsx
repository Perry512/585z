import './App.css'
import Header from './components/Header';
import Links from './pages/Links';
import Footer from './components/Footer';
import AppView  from './components/AppView';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter basename="/585z">
      <div className="w-full">
        <Header />
        <AppView />
        <Links />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
