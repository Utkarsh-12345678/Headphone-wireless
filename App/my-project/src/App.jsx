/* eslint-disable no-unused-vars */
// import React from 'react'
//  import Navbar from './components/Navbar/Navbar'
//  import Home from './components/Home/Home'
//  import Services from './components/Ser/Services'
//  import Banner from './components/Banner/Banner'
//  import Footer from './components/Footer/Footer'
//  import About from './components/About/About'

// import Login from './components/Register/Login'
// import Signup from './components/Register/Signup'

// import {BrowserRouter , Routes , Route} from "react-router-dom";
// import { UpdateFollower } from 'react-mouse-follower'

// const App = () => {
//   return (
//     <>
//     <div>
//       <Navbar/>
//     </div>
//     </>
//   )
// }

// export default App


import React from 'react'
import Navbar from "../src/components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Services from "./components/Ser/Services"
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import {BrowserRouter , Routes , Route} from "react-router-dom";
import { UpdateFollower } from 'react-mouse-follower'
import About from './components/About/About'
import Categories from './components/Categories/Categories'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
   
   
    </div>
  )
}

export default App
