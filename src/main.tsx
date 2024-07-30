import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Navbar } from './components/Navbar/Navbar.tsx'
import { BrowserRouter } from 'react-router-dom'
import { SessionProvider } from './context/SessionProvider.tsx'
import { NotificationProvider } from './context/NotificationContext.tsx'
import { TemperatureProvider } from './context/TemperatureContext.tsx'
import { TourContextProvider } from './context/TourContext.tsx'
import TourWrapper from './components/TourWrapper.tsx'
import ErrorBoundary from './ErrorBoundary.tsx'

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
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TourContextProvider>
          <TemperatureProvider>
            <NotificationProvider>
              <SessionProvider>
                <BrowserRouter>
                  <TourWrapper />
                  <Navbar />
                  <App />
                </BrowserRouter>
              </SessionProvider>
            </NotificationProvider>
          </TemperatureProvider>
        </TourContextProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>
)
