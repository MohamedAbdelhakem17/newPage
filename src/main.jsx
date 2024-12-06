import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import './assets/css/index.css'
import './i18n/config';
import App from './App/App'
import ThemeProvider from './context/themeContext/ThemeProvider'
import LocalizationsProvider from './context/localizationContext/LocalizationsProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocalizationsProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LocalizationsProvider>
  </StrictMode>,
)
