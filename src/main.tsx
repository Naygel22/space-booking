import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Navbar } from './components/Navbar.tsx'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  defaultOptions: {
    queries: {
      staleTime: 60_000 //1 minuta
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
