import React from 'react'
import Container from './components/Container'
import { ThemeContextProvider } from './components/Context/ThemeContext'
const App = () => {
  return (
    <ThemeContextProvider>
        <Container />
    </ThemeContextProvider>
  )
}

export default App