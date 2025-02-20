import React from 'react'
import LoginForm from './Login/LoginForm'
import { Routes,Route } from 'react-router-dom'
import RegistrationForm from './Login/RegistrationForm'
import Home from './Home'
import About from './Footer/About'
import Contact from './Contact'
const Routing = () => {
  return (
    <div>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path='/signup'element={<RegistrationForm/>}/>
          <Route path='/about'element={<About/>}/>
          <Route path='/contact'element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default Routing;