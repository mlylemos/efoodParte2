import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Header from './components/Header'

function AppRoutes() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <>
      {!isHomePage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<Restaurant />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App