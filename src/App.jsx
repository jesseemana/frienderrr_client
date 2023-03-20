import { Route, Navigate, Routes } from "react-router-dom"
import HomePage from "./pages/homePage/Index"
import LoginPage from "./pages/loginPage"
import ProfilePage from "./pages/profilePage"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme"


function App() {
  const mode = useSelector((state) => state.mode) // GRABBING MAIN APP THEME FROM STORE 
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); // SETTING APP THEM ONCE
  const isAuth = Boolean(useSelector((state) => state.token))


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={isAuth ? <HomePage /> : <Navigate to='/' />} />
          <Route path='/profile/:userId' element={isAuth ? <ProfilePage /> : <Navigate to='/' />} />
        </Routes>
      </ThemeProvider>
    </div>
  )
}


export default App;