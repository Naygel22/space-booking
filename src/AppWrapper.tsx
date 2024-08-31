
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { SessionProvider } from './context/SessionProvider.tsx'
import { NotificationProvider } from './context/NotificationContext.tsx'
import { TemperatureProvider } from './context/TemperatureContext.tsx'
import { TourContextProvider } from './context/TourContext.tsx'
import ErrorBoundary from './ErrorBoundary.tsx'

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    queryCache: new QueryCache(),
    defaultOptions: {
      queries: {
        staleTime: 60_000 //1 minuta
      }
    }
  })
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TourContextProvider>
          <TemperatureProvider>
            <NotificationProvider>
              <SessionProvider>
                <BrowserRouter>
                  {children}
                </BrowserRouter>
              </SessionProvider>
            </NotificationProvider>
          </TemperatureProvider>
        </TourContextProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}



