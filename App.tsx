import React from 'react'
import DynamicIsland from './src/Loading'
import LoadingAnimationWithFailed from './src/Loading'
import MusicAppDesign from './src/MusicAppDesign'
import PercentageSelector from './src/PercentageSelector'
import { LogBox } from 'react-native'
import LightControl from './src/LightControl'
import InfluencerScreen from './src/BicycleSystem'
import BlurDashboard from './src/BlurDashboard'
import AnalyticsApp from './src/AnalyticsApp'
import ExpandingView from './src/ExpandingView'

const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <ExpandingView />
  )
}

export default App