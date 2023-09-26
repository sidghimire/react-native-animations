import { View, Text, SafeAreaView, Pressable, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withDecay, withSpring, withTiming } from 'react-native-reanimated'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const windowWidthHalf = windowWidth / 2
const ExpandingView = () => {
    const [on, setOn] = useState(false)
    const animatingWidth = useSharedValue(10)
    const animatingHeight = useSharedValue(10)
    const animatingMarginBottom = useSharedValue(20)
    const animatingBorderRadius = useSharedValue(100)
    const top = useSharedValue(windowHeight - 100)
    const left = useSharedValue(windowWidthHalf - 40)
    const [originalCoordinate, setOriginalCoordinate] = useState([windowHeight-100, windowWidthHalf - 40])
    const animatedStyle = useAnimatedStyle(() => ({
        width: animatingWidth.value,
        height: animatingHeight.value,
        marginBottom: animatingMarginBottom.value,
        borderRadius: animatingBorderRadius.value,
        top: top.value,
        left: left.value
    }))

    function animate() {
        const y = top.value
        const x = left.value
        runOnJS(setOriginalCoordinate)([y, x])

        animatingHeight.value = withTiming(windowHeight, { duration: 1000 })
        animatingWidth.value = withTiming(windowWidth, { duration: 1000})
        animatingMarginBottom.value = withTiming(0, { duration: 1000 })
        animatingBorderRadius.value = withTiming(20, { duration: 1000 })
        top.value = withTiming(0, { duration: 1000 })
        left.value = withTiming(0, { duration: 1000 })

        runOnJS(setOn)(!on)
    }
    function deAnimate() {
        top.value = withTiming(originalCoordinate[0], { duration: 1000 })
        left.value = withTiming(originalCoordinate[1], { duration: 1000 })
        animatingHeight.value = withTiming(10, { duration: 1000 })
        animatingWidth.value = withTiming(10, { duration: 1000 })
        animatingMarginBottom.value = withTiming(20, { duration: 1000 })
        animatingBorderRadius.value = withTiming(100, { duration: 1000 })

        runOnJS(setOn)(!on)
    }

    const Pan = Gesture.Pan().onChange((event: any) => {
        top.value = top.value + event.changeY
        left.value = left.value + event.changeX
    })

    return (
        <GestureHandlerRootView className='flex flex-col h-full'>
            <GestureDetector gesture={Pan}>
                <Animated.View className={' items-center'} style={[{ padding: 40, width: 10, height: 10, marginBottom: 20, backgroundColor: '#e34234', borderRadius: 100 }, animatedStyle]}>
                    <Pressable onPress={() => !on ? animate() : deAnimate()} className=' rounded-full my-auto' style={{ width: !on ? 10 : windowWidth, height: !on ? 10 : windowHeight, padding: 40 }}>

                    </Pressable>
                </Animated.View>
            </GestureDetector>
        </GestureHandlerRootView>
    )
}

export default ExpandingView