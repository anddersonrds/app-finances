import React from 'react'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components/native'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/shared/styles/theme'

// import Dashboard from './src/screen/Dashboard'
import Register from './src/screen/Register'
// import CategorySelect from './src/screen/CategorySelect'

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      {/* <Dashboard /> */}
      <Register />
      {/* <CategorySelect /> */}
    </ThemeProvider>
  )
}

export default App
