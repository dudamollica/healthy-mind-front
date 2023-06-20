import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/LoginPage"
import Register from "./Pages/RegisterPage"

export default function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/cadastro" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}