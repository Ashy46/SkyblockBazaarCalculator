import React from 'react'
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BazaarMatrix from './components/bazaarMatrix'
import Navbar from './components/navbar'
import Portfolio from './components/portfolio'
import Home from './components/home'

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bazaar" element={<BazaarMatrix />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    )
}