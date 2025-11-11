
import './App.css'
import Navbar from './components/bars/Navbar'
import './index.css'
import LandingPage from './pages/LandingPage'
import {Routes,Route } from 'react-router-dom'
import Features from './pages/Features'
import PageNotFound from './pages/PageNotFound'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import { Toaster } from 'sonner'
import HomePage from './pages/HomePage'
import MainLayout from './pages/MainLayout'

function App() {
  return (
   <div>

    <Toaster position="top-center" richColors closeButton expand/>
    <Routes>
      <Route path={"/"} element={<MainLayout/>}>
      <Route path={"/landing"} element={<LandingPage/>}></Route>
      <Route path={"/features"} element={<Features/>}></Route>
      <Route path={"/login"} element={<LoginPage/>}></Route>
      <Route path={"/signup"} element={<SignUpPage/>}></Route>
      </Route>
      <Route path={"/home"} element={<HomePage/>}></Route>
      

      <Route path={"*"} element={<PageNotFound/>}></Route>

    </Routes>

   </div>
  )
  
}

export default App


