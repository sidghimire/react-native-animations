import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const BicycleSystem = () => {
  return (
    <LinearGradient
      colors={['#1a1a1a', '#2b2b2b', '#000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className='flex-1 '>
      <SafeAreaView className='flex-1'>

        <View className='flex flex-row px-4 p-4'>
          <Text className='text-[36px] text-gray-300 font-black my-auto'>Bikeys</Text>
          <View className='ml-auto mr-4'>
            <Text className='text-[16px] text-gray-500 font-light ml-auto'>Serial No: 434342323</Text>
            <Text className='text-[16px] text-gray-500 font-light ml-auto'>Bikeys PRO MAX</Text>
          </View>
        </View>
        <View className='flex flex-row mt-6 px-4'>
          <View className=' bg-white w-7/12 rounded-xl h-64'>
            <LottieView source={require('../assets/cycleAnimation.json')} autoPlay loop />
            <Text className='mt-auto mx-auto mb-4 font-extrabold text-[28px]'>NYC</Text>

          </View>
          <View className='flex-1 pl-6 flex flex-col space-y-3'>
            <View className='bg-black p-2 flex-1 rounded-[20px] flex flex-row'>

              <Pressable className='bg-white rounded-[20px] h-full p-3'>
                <Icon name='bicycle' size={24} color={"#000"} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
              </Pressable>
              <View className='flex flex-col flex-1 item-center justify-center'>
                <Text className=' text-[28px] font-bold text-white text-center'>30</Text>
                <Text className='text-[14px] font-bold text-white text-center'>km</Text>
              </View>
            </View>
            <View className='bg-white p-2 flex-1 rounded-[20px] flex flex-row'>
              <View className='flex flex-col flex-1 item-center justify-center'>
                <Text className=' text-[20px] font-bold'>Lock</Text>
                <Text className='text-[20px] font-bold'>Bike</Text>
              </View>
              <Pressable className='bg-black rounded-[20px] h-full p-3'>
                <Icon name='lock-open' size={24} color={"#fff"} style={{ marginTop: 'auto' }} />
              </Pressable>
            </View>
          </View>
        </View>
        <View className='flex flex-row mt-6 px-4'>

          <View className='flex-1 pr-6 flex flex-col space-y-3'>
            <View className='bg-black p-2 flex-1 rounded-[20px] flex flex-row'>

              <Pressable className='bg-white rounded-[20px] h-full flex-1 flex flex-col justify-center'>
                <Text className=' font-extrabold mx-auto text-[30px]'>
                  Ring
                </Text>
                <Text className='font-semibold mx-auto'>
                  My Bike
                </Text>
              </Pressable>

            </View>
            <View className='bg-white p-2 flex-1 rounded-[20px] flex flex-col'>

              <Pressable className='bg-black rounded-[20px] h-full p-3'>
                <Text className=' text-[28px] font-bold text-white text-center'>1020</Text>
                <Text className=' text-[12px] font-bold text-white text-center'>kCal</Text>

                <Icon name='heart' size={24} color={"#fff"} style={{ marginTop: 'auto' }} />
              </Pressable>
            </View>
          </View>
          <View className=' bg-white w-7/12 rounded-xl h-64'>
            <LottieView source={require('../assets/cycle2.json')} autoPlay loop />
            <Text className='mt-auto mx-auto mb-4 font-extrabold text-[36px]'>48%</Text>
          </View>
        </View>
        <View className='bg-black flex flex-row mt-auto p-4 border-t border-t-gray-800'>
          <Pressable className='flex-1 items-center'>
            <Icon name='home' color={'#C8EA4B'} size={24} />
          </Pressable>
          <Pressable className='flex-1 items-center'>
            <Icon name='bar-chart' color={'#afafaf'} size={24} />
          </Pressable>
          <Pressable className='flex-1 items-center'>
            <Icon name='aperture' color={'#afafaf'} size={24} />
          </Pressable>
          <Pressable className='flex-1 items-center'>
            <Icon name='settings' color={'#afafaf'} size={24} />
          </Pressable>
        </View>
      </SafeAreaView>

    </LinearGradient>
  )
}

export default BicycleSystem