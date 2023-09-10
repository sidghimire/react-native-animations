import React from 'react'
import DynamicIsland from './src/Loading'
import LoadingAnimationWithFailed from './src/Loading'
import MusicAppDesign from './src/MusicAppDesign'
import PercentageSelector from './src/PercentageSelector'
import { LogBox } from 'react-native'

const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <PercentageSelector/>
  )
}

export default App