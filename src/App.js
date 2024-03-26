import './App.css';
import Home from "./pages/Home"
import Socials from "./pages/Socials"
import Projects from "./pages/Projects"
import About from "./pages/About"
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='app-container'>
      < ToastContainer />
      < NavBar />
      < Home />
      < Socials />
      < Projects />
      < About />
      < Contact />
    </div>
  );
}

export default App;
