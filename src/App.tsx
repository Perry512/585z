import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import AppView  from './components/AppView';
import { HashRouter } from 'react-router-dom';
import LargeSocialLinkBanner from './components/LargeSocialLinkBanner';

function App() {

  return (
    <HashRouter>
        <Header />
        <AppView />
        <LargeSocialLinkBanner />
        <Footer />
    </HashRouter>
  )
}
//         <Route path="/" element={<Home />} />
//       <Route path="/calendar" element={<Calendar />} />
export default App;
