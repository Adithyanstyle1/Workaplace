import AboutUs from './About Us/AboutUs';
import './App.css';
import Clients from './Clients/Clients';
import Features from './Features/Features';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import LoginSignUp from './Login/LoginSignUp';
import Navbar from './Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/aboutus" element={ <AboutUs/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/signup" element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
