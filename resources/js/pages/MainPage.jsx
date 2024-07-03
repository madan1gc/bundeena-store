import React from 'react'
import { Header, Footer } from '../components'
import Home from './Home'
import Offers from './Offers'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/offers' element={<Offers />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default MainPage