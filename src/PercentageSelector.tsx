import { View, Text, Pressable, useAnimatedValue, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withDecay, withSpring, withTiming } from 'react-native-reanimated'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import PercentSlider from '../components/PercentSlider'

const PercentageSelector = () => {
    const height = Dimensions.get('screen').height - 120
    const position = useSharedValue(60)
    const fontSizeValue = useSharedValue<number>(16)
    const [choice, setChoice] = useState(11 - Math.round(60 / 70))
    const pan = Gesture.Pan()
        .onBegin(() => {

        })
        .onChange((event) => {
            if (11 - Math.round(position.value / 70) != choice) {
                fontSizeValue.value = withTiming(16, { duration: 1000 })
            }
            //console.log(11-Math.round(position.value / 70))
            runOnJS(setChoice)(11 - Math.round(position.value / 70))
            fontSizeValue.value = 36
            if (position.value + event.changeY > 50 && position.value + event.changeY < height + 10) {
                position.value = withTiming(position.value + event.changeY, { duration: 40 })
            }
        })
        .onFinalize((event) => {

        })

    const buttonAnimation = useAnimatedStyle(() => ({
        top: position.value
    }))
    const textAnimation = useAnimatedStyle(() => ({
        fontSize: fontSizeValue.value,
        color: '#5eb2f2'
    }))
    return (
        <GestureHandlerRootView className='bg-black flex-1 flex flex-row'>
            <View className='flex flex-col-reverse space-y-4 py-[64px] px-5 w-36'>
                {Array(11).fill(1).map((item: any, index: number) => {
                    fontSizeValue.value = withTiming(32, { duration: 1000 })
                    return (<>
                        {index == choice ?
                            <Animated.Text key={index} style={[textAnimation]} className='text-white w-full text-[16px] font-bold my-auto'>
                                {index * 10}%
                            </Animated.Text>
                            :
                            <Text key={index} className='text-white w-full text-[16px] font-bold my-auto'>
                                {index * 10}%
                            </Text>
                        }
                    </>
                    )
                })}
            </View>
            <View className='flex-1 flex flex-row'>

                <View className='w-50 bg-black'>
                    <GestureDetector gesture={pan}>
                        <Animated.View style={[buttonAnimation]} className=' top-[250px] rounded-full '>
                            <View className='-top-[1100px]'>
                                <PercentSlider />
                            </View>
                        </Animated.View>
                    </GestureDetector>
                </View>
                <View className='flex-1 bg-black'>
                    <View className='flex-1'>
                        <View className='my-auto'>
                            <Text className=' text-gray-600 text-[22px] font-black mx-auto tracking-tighter text-center'>
                                Threshold
                            </Text>
                            <Text className=' text-gray-100 text-[34px] font-black mx-auto tracking-tighter text-center'>
                                80%
                            </Text>
                        </View>
                        <View className='my-auto'>
                            <Text className=' text-gray-600 text-[22px] font-black mx-auto tracking-tighter text-center'>
                                Water Level
                            </Text>
                            <Text className=' text-gray-100 text-[34px] font-black mx-auto tracking-tighter text-center'>
                                {choice * 10}%
                            </Text>
                        </View>
                        <View className='my-auto'>
                            <Text className=' text-gray-600 text-[22px] font-black mx-auto tracking-tighter text-center'>
                                Average
                            </Text>
                            <Text className=' text-gray-100 text-[34px] font-black mx-auto tracking-tighter text-center'>
                                {30}%
                            </Text>
                        </View>

                    </View>

                </View>
            </View>
        </GestureHandlerRootView>
    )
}

export default PercentageSelector