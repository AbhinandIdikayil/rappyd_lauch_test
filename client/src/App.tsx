import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Layout from "./layout/Layout"
import Home from "./pages/Home/Home"
import Signup from "./pages/Signup/Signup"
import ProtectedRoute from "./components/ProtectedRoute"

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
    </Routes>
  )
}

export default App
