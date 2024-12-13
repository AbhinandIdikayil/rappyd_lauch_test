import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Layout from "./layout/Layout"
import Home from "./pages/Home/Home"
import Signup from "./pages/Signup/Signup"
import ProtectedRoute from "./components/ProtectedRoute"
import SidebarLayout from "./layout/SidebarLayout"

function App() {

  return (
    <Routes>


      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />

        <Route path="/login" element={
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        } />
        <Route path="/signup" element={
          <ProtectedRoute>
            <Signup />
          </ProtectedRoute>
        } />

      </Route>
      <Route path="/dashboard" element={<SidebarLayout />} >
        <Route path="student" element={<h1> Student </h1>} />
        <Route path="teacher" element={<h1> Teacher </h1>} />
      </Route>
    </Routes>
  )
}

export default App
