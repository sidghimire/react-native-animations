import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withDecay, withTiming } from 'react-native-reanimated'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const GlobalTimeSelector = () => {
    const sunOffset = useSharedValue(0)
    const [localTime, setLocalTime] = useState('4:00 AM')

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{
            translateX: withTiming(sunOffset.value, {
                duration: 200,
                easing: Easing.inOut(Easing.linear),
            })
        }]
    }))
    const overlayStyle = useAnimatedStyle(() => ({
        transform: [{
            translateX: withTiming(sunOffset.value, {
                duration: 200,
                easing: Easing.inOut(Easing.linear),
            })
        }]
    }))
    const pan = Gesture.Pan()
        .onBegin(() => {

        })
        .onChange((event) => {
            const val = runOnJS(calculateTimeInLA)(event.absoluteX)

            if (event.absoluteX > 50 && event.absoluteX < 350) {
                sunOffset.value = sunOffset.value + event.changeX
            }
        })
        .onFinalize(() => {

        });
    function calculateTimeInLA(value: any) {
        // Check if the value is within the range (50-350)
        if (value < 50 || value > 350) {
            return "Value is out of range.";
        }

        // Calculate the time difference in hours
        const timeDifference = ((value - 50) / 300) * 17; // 300 is the range (350 - 50), 17 hours is the time span

        // Get the current date and time in Los Angeles
        const currentDate = new Date();
        currentDate.setHours(12 - timeDifference); // 12 PM is the starting point

        // Format the time for display
        const options = { hour: 'numeric', minute: 'numeric', hour12: true };
        const formattedTime = currentDate.toLocaleTimeString('en-US', options);
        setLocalTime(formattedTime)
        return formattedTime;
    }

    return (
        <GestureHandlerRootView className=' flex-1 flex flex-col'>
            <LinearGradient
                colors={['#000000', '#050505', '#080808']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className=' flex-1 flex flex-col'
            >
                <View className='p-5 mt-10'>
                <Text className='text-white text-[24px] font-black text-center mb-20'>Los Angeles, CA</Text>

                    <Text className='text-gray-200 text-[56px] font-extrabold text-center mt-10'>{localTime}</Text>

                </View>
                <View className='flex-1 mt-1'>
                    <Image source={require("../assets/map.png")} className='w-full h-48 my-auto' />
                    <Animated.View style={[overlayStyle]} className={'absolute top-5 w-[700px] h-[250px] my-auto '}>

                        <Image source={require("../assets/Subtract.png")} className='w-[700px] h-[230px] my-auto absolute -left-36' />
                    </Animated.View>
                </View>
                <View className='px-4 flex-1'>
                    <Animated.View className=' h-2 rounded-full bg-gray-700 top-[50px] w-11/12 mx-auto'>
                    </Animated.View>
                    <GestureDetector gesture={pan}>
                        <Animated.View style={[animatedStyle]} className='w-8 h-8 rounded-full bg-orange-300 absolute top-[38px] left-1/2'>
                        </Animated.View>
                    </GestureDetector>

                </View>
                <View>
                    <View className='flex flex-row space-x-3 px-8'>
                        <Pressable className='bg-white mb-10 mx-auto w-1/2 text-center p-4 rounded-xl'>
                            <Text className='text-center'>
                                Continue
                            </Text>
                        </Pressable>
                        <Pressable className='bg-blue-700 mb-10 mx-auto w-1/2 text-center p-4 rounded-xl'>
                            <Text className='text-center text-white'>
                                Schedule Meeting
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </LinearGradient>
        </GestureHandlerRootView >
    )
}

export default GlobalTimeSelector