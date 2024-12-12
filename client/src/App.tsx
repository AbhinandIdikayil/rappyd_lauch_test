import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Layout from "./layout/Layout"
import Home from "./pages/Home/Home"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
