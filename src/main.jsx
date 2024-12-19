
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { doctors } from './assets/assets.js'
import { AppContext } from './context/AppContext.jsx'
import { currencySymbol } from './context/AppContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppContext.Provider value={{doctors,currencySymbol}}>
    <App />
    </AppContext.Provider>
    </BrowserRouter>
)
