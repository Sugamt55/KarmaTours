import './App.css';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Accomodation from './pages/Accomodation';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App m-1 bg-color-5">  
         <Navbar/>  

         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/destination' element={<Destination/>}/>
           <Route path='/accomodation' element={<Accomodation/>}/>
           <Route path='/contact' element={<Contact/>}/>
         </Routes>
         
         <Footer/>

    </div>
  );
}

export default App;