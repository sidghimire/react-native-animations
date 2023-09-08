import { Pressable, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Animated, { runOnJS, useAnimatedProps, useAnimatedStyle, useDerivedValue, useSharedValue, withSequence, withSpring, withTiming } from 'react-native-reanimated'
import ProgressTag, { WarningTag } from '../components/ProgressTag'
import Icon from 'react-native-vector-icons/Ionicons'
const AnimatedText = Animated.createAnimatedComponent(TextInput)

const LoadingAnimationWithFailed = () => {
    const boxHeight = useSharedValue(120)
    const boxWidth = useSharedValue(120)
    const progressWidth = useSharedValue(10)
    const tagX = useSharedValue(10)
    const opacity = useSharedValue(0)
    const value = useSharedValue(0)
    const tilt = useSharedValue(0)
    const [warning, setWarning] = useState(false)
    const trackColor = useSharedValue("#DE7456")
    const finalTranslate = useSharedValue(0)
    const percent = 40
    const trackWidth = 330
    const percentToWidth = percent / 100 * trackWidth
    //buttonHeight:
    //buttonWidth:

    //sliderHeight:10
    //sliderWidth:350
    const animatedStyle = useAnimatedStyle(() => ({
        width: boxWidth.value,
        height: boxHeight.value,
        borderRadius: 10,
        backgroundColor: '#fff',
    }))
    const progressStyle = useAnimatedStyle(() => ({
        width: progressWidth.value,
        height: 10,
        backgroundColor: trackColor.value,
        borderRadius: 10,
        opacity: opacity.value,
    }))
    const progressTagStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: tagX.value }],
        opacity: opacity.value
    }))

    const progressTagStyle2 = useAnimatedStyle(() => ({
        transform: [{ translateY: finalTranslate.value }],
        opacity: opacity.value
    }))
    const progressTagStyle3 = useAnimatedStyle(() => ({
        transform: [{ rotateZ: tilt.value + "deg" }],
        opacity: opacity.value
    }))
    const animatedValue = useDerivedValue(() => {
        return withTiming(value.value, { duration: 3000 })
    })
    const animatedText = useAnimatedProps(() => {
        return {
            text: `${Math.round((animatedValue.value / trackWidth) * 100)}%`
        }
    })
    function startAnimation() {
        boxHeight.value = withTiming(10,
            { duration: 500 }, () => {
                boxWidth.value = withSequence(
                    withTiming(trackWidth, { duration: 500 }, () => {
                        value.value = 250
                        opacity.value = 100
                        progressWidth.value = withSequence(withTiming(percentToWidth, { duration: 3000 }, () => {
                            runOnJS(setWarning)(true)
                            trackColor.value = '#960019'
                            tilt.value = withTiming(45, { duration: 1000 }, () => {
                                tilt.value = withTiming(0, { duration: 1000 }, () => {
                                    finalTranslate.value = withSpring(17, { duration: 3500 })
                                })

                            })
                        }))
                        tagX.value = withSequence(withTiming(percentToWidth - 5, { duration: 3000 }))
                        value.value = withTiming(percentToWidth, { duration: 300 })

                    })
                );
            })
    }
    return (
        <View className='flex-1 h-full'>
            <LinearGradient
                colors={['#0075A2', '#0075A2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className=' flex-1 flex flex-col'
            >

                <Animated.View className={'bg-black'} style={[{ top: 150, left: 28, width: 0 }, progressTagStyle]}>
                    <Animated.View style={[progressTagStyle2]}>
                        <Animated.View style={[progressTagStyle3]}>
                            {warning ?
                                <WarningTag />
                                :
                                <ProgressTag />
                            }
                            {!warning &&
                                <View className='absolute w-12 h-12 left-[6px]'>
                                    <AnimatedText className='text-center my-auto text-white font-bold' editable={false}
                                        animatedProps={animatedText} />
                                </View>
                            }
                        </Animated.View>
                    </Animated.View>
                </Animated.View>
                <Pressable onPress={() => startAnimation()} className='mt-44'>
                    <Animated.View style={[animatedStyle, {
                        marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto'
                    }]}>
                        <Icon name='chevron-down-outline' color={"#0075A2"} size={70} style={{
                            marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto', paddingRight: 0, paddingTop: 10
                        }} />

                        <Animated.View style={[progressStyle]}>
                        </Animated.View>
                    </Animated.View>
                </Pressable>


            </LinearGradient>
        </View>
    )
}

export default LoadingAnimationWithFailed