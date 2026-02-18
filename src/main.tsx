import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/Providers/theme-provider.tsx'
import ErrorBoundary from './shared/providers/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
  <>
  <ErrorBoundary>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ErrorBoundary>
  </>
)
