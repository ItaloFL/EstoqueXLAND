import { Login } from './pages/Login'
import './styles/global.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
