import {Router, Route, Navigate, Routes} from "react-router-dom"
import HomePage from "./pages/homePage/Index"
import LoginPage from "./pages/loginPage"
import ProfilePage from "./pages/profilePage"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/profile/:userId' element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
