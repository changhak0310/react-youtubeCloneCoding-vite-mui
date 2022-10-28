import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "./pages/Main"
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
 palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  }
})

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme ={theme}>
          <Routes>
            <Route element={<Main/>} path="/"/>
          </Routes>
        </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
