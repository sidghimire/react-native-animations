import React from 'react'
import DynamicIsland from './src/Loading'
import LoadingAnimationWithFailed from './src/Loading'
import MusicAppDesign from './src/MusicAppDesign'
import PercentageSelector from './src/PercentageSelector'
import { LogBox } from 'react-native'
import LightControl from './src/LightControl'

const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <LightControl/>
  )
}

export default App