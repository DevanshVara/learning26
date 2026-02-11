// import { useState } from 'react'
// import './App.css'
// import ContentComponent from './components/ContentComponent.jsx'
// import FooterComponent from './components/FooterComponent.jsx'
// import HeaderComponents from './components/HeaderComponents.jsx'
// import MapDemo1 from './components/MapDemo1.jsx'
// import MapDemo2 from './components/MapDemo2.jsx'
// import MapDemo3 from './components/MapDemo3.jsx'
// import MapDemo4 from './components/MapDemo4.jsx'
// import MapDemo5 from './components/MapDemo5.jsx'
// import MapDemo6 from './components/MapDemo6.jsx'
// import MapDemo7 from './components/MapDemo7.jsx'
// import MapDemo8 from './components/MapDemo8.jsx'
// import MapDemo9 from './components/MapDemo9.jsx'
// import MapDemo10 from './components/MapDemo10.jsx'
// import Portfolio from './components/Portfolio.jsx'
import { Route, Routes } from "react-router-dom";
import NetflixHome from './components/NetflixHome.jsx'
import NetflixMovies from "./components/NetflixMovies.jsx";
import NetflixShows from "./components/NetflixShows.jsx";
import HomeComponent from "./components/HomeComponent.jsx";
import Navbar from "./components/Navbar.jsx";
import Watch from "./components/Watch.jsx";
import ErrorNotFound from "./components/ErrorNotFound.jsx";
import TeamDetails from "./components/TeamDetails.jsx";
import Teams from "./components/Teams.jsx";
import UseStateDemo1 from "./components/UseStateDemo1.jsx";
import UseStateDemo2 from "./components/UseStateDemo2.jsx";
import UseStateDemo3 from "./components/UseStateDemo3.jsx";
import FunctionDemo1 from "./components/FunctionDemo1.jsx";
import Employees from "./components/Employees.jsx";
import InputDemo1 from "./components/input/InputDemo1.jsx";
import InputDemo2 from "./components/input/InputDemo2.jsx";
import FormDemo1 from "./components/form/FormDemo1.jsx";
import FormDemo2 from "./components/form/FormDemo2.jsx";
import FormDemo3 from "./components/form/FormDemo3.jsx";
import FormDemo4 from "./components/form/FormDemo4.jsx";
// import NetflixWebseries from "./components/NetflixWebseries.jsx";
// import NetflixDisney from "./components/NetflixDisney.jsx";
// import NetflixTV from "./components/NetflixTV.jsx";

function App() {
  
  return (
    <div>
      {/* <HeaderComponents /> */}
      {/* <ContentComponent /> */}
      {/* <Portfolio /> */}

      {/* <MapDemo1 /> */}
      {/* <MapDemo2 /> */}
      {/* <MapDemo3 /> */}
      {/* <MapDemo4></MapDemo4> */}
      {/* <MapDemo5></MapDemo5> */}
      {/* <MapDemo6></MapDemo6> */}
      {/* <MapDemo7></MapDemo7> */}
      {/* <MapDemo8></MapDemo8> */}
      {/* <MapDemo9></MapDemo9> */}
      {/* <MapDemo10></MapDemo10> */}

      <Navbar/>
      <Routes>
        
        <Route path="/" element={<HomeComponent/>}></Route>  
        <Route path="/netflixhome" element={<NetflixHome/>}></Route>
        <Route path="/netflixmovie" element={<NetflixMovies/>}></Route>  
        <Route path="/netflixshows" element={<NetflixShows/>}></Route>  
        {/* <Route path="/netflixwebseries" element={<NetflixWebseries/>}></Route>
        <Route path="/netflixdisney" element={<NetflixDisney/>}></Route>
        <Route path="netflixtv" element={<NetflixTV/>}></Route> */}
        <Route path="/watch/:name" element={<Watch/>}></Route>
        <Route path="/teams" element={<Teams/>}></Route>
        <Route path="/teamdetails/:detail" element={<TeamDetails/>}></Route>
        <Route path="/fundemo1" element={<FunctionDemo1/>}></Route>
        <Route path="/usestatedemo1" element={<UseStateDemo1/>}></Route>
        <Route path="/usestatedemo2" element={<UseStateDemo2/>}></Route>
        <Route path="/usestatedemo3" element={<UseStateDemo3/>}></Route>
        <Route path="/employees" element={<Employees/>}></Route>
        <Route path="/inputdemo1" element={<InputDemo1/>}></Route>
        <Route path="/inputdemo2" element={<InputDemo2/>}></Route>
        <Route path="/formdemo1" element = {<FormDemo1/>}></Route>
        <Route path="/formdemo2" element = {<FormDemo2/>}></Route>
        <Route path="/formdemo3" element = {<FormDemo3/>}></Route>
        <Route path="/formdemo4" element = {<FormDemo4/>}></Route>

        <Route path="/*" element={<ErrorNotFound/>}></Route>
        
      </Routes>

      {/* <FooterComponent /> */}
    </div>
  )
}

export default App
