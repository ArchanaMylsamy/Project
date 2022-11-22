import './App.css';
import Logo from "./logo";
import Welcome from "./welcome";
import Login from "./login";
import Signup from "./signup";
import Password from "./password";
import Otp from "./otp";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Service from "./service";
import List from "./list";
import Soilmain from "./soil";
import Soilknow from "./soil1";
import Laterite from "./soil_1";
import Soiltest from "./soil2";
import Coimbatore from "./soil_2";
import Tractormain from "./tractor";
import Coimbatoret from "./tractor1";
import Schemas from "./schemas";
import Insurance from "./insurance";
import Statistics from "./statistics";
import Statisticsgraph from "./statistics1";




import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
       <Route exact path='/' element={<Logo/>}></Route>
       <Route exact path='/logo' element={<Logo/>}></Route>
       <Route exact path='/Welcome' element={<Welcome/>}></Route>
       <Route exact path='/Welcome' element={<Welcome/>}></Route>
       <Route exact path='/Login' element={<Login/>}></Route>
       <Route exact path='/Signup' element={<Signup/>}></Route>
       <Route exact path='/Password' element={<Password/>}></Route>
       <Route exact path='Otp' element={<Otp/>}></Route>
       <Route exact path='Home' element={<Home/>}></Route>
       <Route exact path='About' element={<About/>}></Route>
       <Route exact path='Contact' element={<Contact/>}></Route>
       <Route exact path='Service' element={<Service/>}></Route>
       <Route exact path='List' element={<List/>}></Route>
       <Route exact path='Soilmain' element={<Soilmain/>}></Route>
       <Route exact path='Laterite' element={<Laterite/>}></Route>
       <Route exact path='Soilknow' element={<Soilknow/>}></Route>
       <Route exact path='Soiltest' element={<Soiltest/>}></Route>
       <Route exact path='Coimbatore' element={<Coimbatore/>}></Route>
       <Route exact path='Tractormain' element={<Tractormain/>}></Route>
       <Route exact path='Coimbatoret' element={<Coimbatoret/>}></Route>
       <Route exact path='Schemas' element={<Schemas/>}></Route>
       <Route exact path='Insurance' element={<Insurance/>}></Route>
       <Route exact path='Statistics' element={<Statistics/>}></Route>
       <Route exact path='Statisticsgraph' element={<Statisticsgraph/>}></Route>
</Routes>
      </div>
    </Router>
  )
}

export default App;
