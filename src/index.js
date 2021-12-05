import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import '@fontsource/exo-2/300.css'
import '@fontsource/exo-2/400.css'
import '@fontsource/exo-2/500.css'
import '@fontsource/exo-2/700.css'

const theme = createTheme({
    palette: {
        primary: {
            main: '#2E3B55'
        }
    },
    typography: {
        fontFamily: '"Exo 2", serif',
    },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <App />
  </ThemeProvider>,
  document.getElementById('root')
)
