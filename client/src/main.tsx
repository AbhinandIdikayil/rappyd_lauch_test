import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme='light' storageKey="vite-ui-theme">
      <div className="bg-background text-foreground min-h-screen">
        {/* Rest of your app */}
        <App />
      </div>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
