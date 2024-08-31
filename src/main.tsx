import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Navbar } from './components/Navbar/Navbar.tsx'
import TourWrapper from './components/TourWrapper.tsx'
import { AppWrapper } from './AppWrapper.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWrapper>
      <TourWrapper />
      <Navbar />
      <App />
    </AppWrapper>
  </React.StrictMode>
)
