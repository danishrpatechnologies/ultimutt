import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Header from './header.tsx'
import Cta from './cta.tsx'
import Home from './home.tsx'
import Feature from './feature.tsx'
import Importance from './importance.tsx'
import Facilites from './facilities.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Cta/>
    <Home/>
    <Importance/>
    <Feature/>
    <Facilites/>
    <App />
  </StrictMode>,
)
