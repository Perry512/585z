import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import AppView  from './components/AppView';
import { BrowserRouter } from 'react-router-dom';
import LargeSocialLinkBanner from './components/LargeSocialLinkBanner';

function App() {

  return (
    <BrowserRouter basename="/585z">
        <Header />
        <AppView />
        <LargeSocialLinkBanner />
        <Footer />
    </BrowserRouter>
  )
}

export default App;
