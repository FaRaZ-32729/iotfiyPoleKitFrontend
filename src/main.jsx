import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { OrganizationProvider } from './contextApi/OrganizationContext.jsx'
import { VenueProvider } from './contextApi/VenueContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <OrganizationProvider>
        <VenueProvider>
          <App />
        </VenueProvider>
      </OrganizationProvider>
    </BrowserRouter>
  </StrictMode>,
)
