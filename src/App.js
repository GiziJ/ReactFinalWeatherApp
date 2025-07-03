import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import Header from './components/Header'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </ThemeProvider>
  )
}