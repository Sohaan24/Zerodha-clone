import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import Home from './components/Home.jsx'
import { UserProvider } from './components/UserContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>
      <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
        </UserProvider>
      </BrowserRouter>
    </CookiesProvider>
  </StrictMode>,
)
