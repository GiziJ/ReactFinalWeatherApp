import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Forecast from './pages/Forecast'
import About from './pages/About'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/forecast" element={<Forecast />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}