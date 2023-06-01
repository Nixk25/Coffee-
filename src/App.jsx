import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Main from "./components/Main-page/Main"
import Contact from "./components/Contact/Contact"
import AboutPage from "./components/AboutPage/AboutPage"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/About' element={<AboutPage/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App