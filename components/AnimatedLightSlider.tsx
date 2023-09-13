import { View } from 'react-native'
import React from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const AnimatedLightSlider = ({ boxHeight = 600 }: any) => {
    const bigHeight = useSharedValue(100)

    const Pan = Gesture.Pan().onChange((event: any) => {
        if (event.absoluteY > 117 && event.absoluteY < 110 + boxHeight + 100) {
            bigHeight.value = withSpring(bigHeight.value - event.changeY, { duration: 700, stiffness: 10 })
        }

    })


    const animatedStyleBigSlider = useAnimatedStyle(() => ({
        height: bigHeight.value
    }))
    return (
        <View className='border-2 border-gray-900 bg-white rounded-full overflow-hidden h-[600px]'>
            <GestureDetector gesture={Pan}>
                <Animated.View style={[animatedStyleBigSlider]} className='bg-[#d83b5d] rounded-b-full mt-auto'>

                </Animated.View>
            </GestureDetector>
        </View>
    )
}

export default AnimatedLightSlider