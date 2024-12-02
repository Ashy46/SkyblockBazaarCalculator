import React from 'react'
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BazaarMatrix from './components/bazaarMatrix'
import Navbar from './components/navbar'

const Home = () => <div>Home Page</div>;

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bazaar" element={<BazaarMatrix />} />
            </Routes>
        </BrowserRouter>
    )
}