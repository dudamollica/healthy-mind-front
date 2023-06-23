import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/LoginPage"
import Register from "./Pages/RegisterPage"
import Today from "./Pages/TodayPage";
import AuthProvider from "./AppContext/auth";

export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/hoje" element={<Today />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider> 
    </>
  )
}