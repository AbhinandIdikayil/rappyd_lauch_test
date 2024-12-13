import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Layout from "./layout/Layout"
import Home from "./pages/Home/Home"
const Signup  = lazy(() => import("./pages/Signup/Signup")) 
import ProtectedRoute from "./components/ProtectedRoute"
import { LoaderIcon } from "lucide-react"
const SidebarLayout = lazy(() => import('./layout/SidebarLayout'))

function App() { 

  return (
    <Suspense fallback={
        <div className="h-screen flex justify-start items-center bg-background">
          <LoaderIcon className="animate-spin text-foreground" size={100} />
        </div>
      }>

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
    </Suspense>
  )
}

export default App
