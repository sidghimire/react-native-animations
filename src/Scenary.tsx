import { View, Text, ImageBackground, Image, Pressable, Dimensions, TextInput } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Ionicons'

const Scenary = () => {
  const screenHeight = Dimensions.get('window').height
  const height = useSharedValue(0)
  const searchBar = useSharedValue(60)
  const imageAnimation = useAnimatedStyle(() => ({
    height: height.value,
  }))
  const searchBarAnimation = useAnimatedStyle(() => ({
    top: searchBar.value
  }))

  return (
    <View className='bg-white flex-1'>
      <Animated.Image style={[imageAnimation]} className='h-full w-full' source={require("../assets/sea-side.jpg")} />
      
      <Animated.View style={[searchBarAnimation]} className='absolute w-full'>
        <View className='w-11/12 bg-gray-200 mx-auto rounded-xl p-2 px-6 flex flex-row'>
          <View className='flex flex-row my-auto'>
            <Icon name='chevron-back-outline' size={20} />
            <Icon name='chevron-forward-outline' size={20} />
          </View>
          <TextInput className='flex-1 text-gray-600 p-3 text-[14px] my-auto mb-2 font-normal text-center justify-center tracking-tighter' value='Venice Restaurant' />
          <Pressable onPress={() => { searchBar.value = withTiming(screenHeight - 100, { duration: 3500 }); height.value = withTiming(screenHeight, { duration: 5000 }) }} className='flex flex-row my-auto mr-4'>
            <Icon name='search-outline' size={22} />
          </Pressable>
          <View className='flex flex-row my-auto'>
            <Icon name='mic-outline' size={22} />
          </View>
        </View>
      </Animated.View>
    </View>
  )
}

export default Scenary
//onPress={() => { height.value = withTiming(300, { duration: 2000 }) }}