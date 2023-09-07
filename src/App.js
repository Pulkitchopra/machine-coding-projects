import './App.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";
// import Home from './Navbar/Home';

// import About from './Navbar/About';
// import Skills from './Navbar/Skills';
// import Contact from './Navbar/Contact';

// import Projects from './Navbar/Projects';
// import Navbar from './Navbar/Navbar';
import Accordion from './Accordion/Accordion';
function App() {



  return (

    <div className="App">

    {/* <Router>
    <Navbar/>


      <Routes>

      <Route exact path = '/' element = {<Home/> } />

      <Route exact path='/about' element={<About/>} />
      <Route exact path='/skills' element={<Skills/>} />
      <Route exact path='/contact' element={<Contact/>} />
      <Route exact path='/projects' element={<Projects/>} />
      </Routes>
    </Router> */}


    <Accordion/>



      
    </div>
  );
}

export default App;
