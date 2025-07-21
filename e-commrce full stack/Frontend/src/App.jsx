// App.js
import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCatagorey from './pages/ShopCatagorey'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Loginsignup from './pages/Loginsignup'
import Footer from './components/Footer/Footer'
import men_banner from './components/img/banner_mens.png'
import women_banner from './components/img/banner_women.png'
import kids_banner from './components/img/banner_kids.png'
import ShopContextProvider from './context/Shopcontext'

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCatagorey banner={men_banner} category="mens" />} />
          <Route path='/womens' element={<ShopCatagorey banner={women_banner} category="womens" />} />
          <Route path='/kids' element={<ShopCatagorey banner={kids_banner} category="kids" />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Loginsignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  )
}

export default App
