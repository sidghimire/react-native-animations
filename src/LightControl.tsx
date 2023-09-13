import { View, Text, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'

const LightControl = () => {
    const bigHeight = useSharedValue(100)
    const smallHeight1 = useSharedValue(100 / 16.67)
    const smallHeight2 = useSharedValue(100 / 16.67)
    const smallHeight3 = useSharedValue(100 / 16.67)

    const Pan = Gesture.Pan().onChange((event: any) => {
        if (event.absoluteY > 117 && event.absoluteY < 110 + 700) {
            bigHeight.value = withSpring(bigHeight.value - event.changeY, { duration: 300, stiffness: 10 })
            smallHeight1.value = withSpring((bigHeight.value - event.changeY) / 6, { duration: 300, stiffness: 10 })
            smallHeight2.value = withSpring((bigHeight.value - event.changeY) / 6, { duration: 300, stiffness: 10 })
            smallHeight3.value = withSpring((bigHeight.value - event.changeY) / 6, { duration: 300, stiffness: 10 })
        }
    })
    const PanSmall1 = Gesture.Pan().onChange((event: any) => {
        if (event.absoluteY > 141 && event.absoluteY < 276) {
            smallHeight1.value = (smallHeight1.value - event.changeY)
        }
    })
    const PanSmall2 = Gesture.Pan().onChange((event: any) => {
        if (event.absoluteY > 492 && event.absoluteY < 590) {
            smallHeight2.value = (smallHeight2.value - event.changeY)
        }
    })
    const PanSmall3 = Gesture.Pan().onChange((event: any) => {
        if (event.absoluteY > 667 && event.absoluteY < 765) {
            smallHeight3.value = (smallHeight3.value - event.changeY)
        }
    })


    const animatedStyleBigSlider = useAnimatedStyle(() => ({
        height: bigHeight.value
    }))
    const animatedSmallSlider1 = useAnimatedStyle(() => ({
        height: smallHeight1.value
    }))
    const animatedSmallSlider2 = useAnimatedStyle(() => ({
        height: smallHeight2.value
    }))
    const animatedSmallSlider3 = useAnimatedStyle(() => ({
        height: smallHeight3.value
    }))

    return (
        <GestureHandlerRootView className='flex-1 bg-black flex flex-col'>
            <SafeAreaView className='flex-1 bg-black flex flex-col'>
                <View className='flex flex-row'>
                    <Pressable className='mr-auto' >
                        <Icon name='chevron-back-outline' size={28} color={"#fff"} />
                    </Pressable>
                    <Text className='text-white font-light text-[26px]'>
                        House Light Control
                    </Text>
                    <Pressable className='ml-auto' >
                        <Icon name='add' size={30} color={"#fff"} />
                    </Pressable>
                </View>
                <View className='flex flex-row flex-1 py-4'>
                    <View className=' flex flex-col w-9/12 px-4'>
                        <View className='w-full p-3 flex flex-row space-x-3 flex-1'>
                            <View className='bg-[#d83b5d] w-8 h-8 rounded-full my-auto'></View>
                            <View className='bg-[#d83b5d] flex-1  rounded-xl flex flex-row p-6'>
                                <View className='flex flex-col mr-6'>
                                    <Text className='text-white font-light text-[20px]'>Kitchen</Text>
                                    <Text className='text-white font-light text-[12px]'>6 lights</Text>
                                    <View className='flex flex-row flex-wrap mt-2 '>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>

                                    </View>
                                </View>
                                <View className=''>
                                    <GestureDetector gesture={PanSmall1}>

                                        <View className='rounded-full overflow-hidden h-[100px] w-2 bg-gray-900'>
                                            <Animated.View style={[animatedSmallSlider1]} className='bg-[#fff] rounded-b-full mt-auto'>

                                            </Animated.View>
                                        </View>
                                    </GestureDetector>

                                </View>
                            </View>
                        </View>
                        <View className='w-full p-3 flex flex-row space-x-3 flex-1'>
                            <View className='border border-gray-600 w-8 h-8 rounded-full my-auto'></View>
                            <View className='border-2 border-gray-600 flex-1  rounded-xl flex flex-col p-6'>
                                <Text className='text-white font-light text-[20px]'>Bedroom</Text>
                                <Text className='text-[#d83b5d] font-light text-[12px]'>8 lights</Text>
                                <View className='flex flex-row flex-wrap mt-2 '>
                                    <Pressable className='w-4 h-4 rounded-full bg-gray-500 mr-2 mt-2'></Pressable>
                                    <Pressable className='w-4 h-4 rounded-full bg-gray-500 mr-2 mt-2'></Pressable>
                                    <Pressable className='w-4 h-4 rounded-full bg-gray-500 mr-2 mt-2'></Pressable>
                                    <Pressable className='w-4 h-4 rounded-full bg-gray-500 mr-2 mt-2'></Pressable>
                                    <Pressable className='w-4 h-4 rounded-full bg-gray-500 mr-2 mt-2'></Pressable>
                                    <Pressable className='w-4 h-4 rounded-full bg-gray-500 mr-2 mt-2'></Pressable>
                                    <Pressable className='w-4 h-4 rounded-full bg-gray-500 mr-2 mt-2'></Pressable>
                                    <Pressable className='w-4 h-4 rounded-full bg-gray-500 mr-2 mt-2'></Pressable>
                                </View>
                            </View>
                        </View>
                        <View className='w-full p-3 flex flex-row space-x-3 flex-1'>
                            <View className='bg-[#d83b5d] w-8 h-8 rounded-full my-auto'></View>
                            <View className='bg-[#d83b5d] flex-1  rounded-xl flex flex-row p-6'>
                                <View className='flex flex-col mr-6'>
                                    <Text className='text-white font-light text-[20px]'>Office</Text>
                                    <Text className='text-white font-light text-[12px]'>10 lights</Text>
                                    <View className='flex flex-row flex-wrap mt-2 '>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                    </View>
                                </View>
                                <View className=''>
                                    <GestureDetector gesture={PanSmall2}>

                                        <View className='rounded-full overflow-hidden h-[100px] w-2 bg-gray-900'>
                                            <Animated.View style={[animatedSmallSlider2]} className='bg-[#fff] rounded-b-full mt-auto'>

                                            </Animated.View>
                                        </View>
                                    </GestureDetector>

                                </View>
                            </View>
                        </View>
                        <View className='w-full p-3 flex flex-row space-x-3 flex-1'>
                            <View className='bg-[#d83b5d] w-8 h-8 rounded-full my-auto'></View>
                            <View className='bg-[#d83b5d] flex-1  rounded-xl flex flex-row p-6'>
                                <View className='flex flex-col mr-6'>
                                    <Text className='text-white font-light text-[20px]'>Living</Text>
                                    <Text className='text-white font-light text-[12px]'>5 lights</Text>
                                    <View className='flex flex-row flex-wrap mt-2 '>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        <Pressable className='w-4 h-4 rounded-full bg-white mr-2 mt-2'></Pressable>
                                        
                                    </View>
                                </View>
                                <View className=''>
                                    <GestureDetector gesture={PanSmall3}>

                                        <View className='rounded-full overflow-hidden h-[100px] w-2 bg-gray-900'>
                                            <Animated.View style={[animatedSmallSlider3]} className='bg-[#fff] rounded-b-full mt-auto'>

                                            </Animated.View>
                                        </View>
                                    </GestureDetector>

                                </View>
                            </View>
                        </View>

                    </View>
                    <View className='flex-1 p-3 flex flex-col'>
                        <Pressable>
                            <Icon name='sunny' size={32} color={'#fff'} style={{ marginRight: 'auto', marginLeft: 'auto', marginBottom: 10 }} />
                        </Pressable>
                        <GestureDetector gesture={Pan}>

                            <View className='border-2 border-gray-900 rounded-full overflow-hidden h-[600px]'>
                                <Animated.View style={[animatedStyleBigSlider]} className='bg-[#d83b5d] rounded-b-full mt-auto'>

                                </Animated.View>
                            </View>
                        </GestureDetector>

                        <Pressable>
                            <Icon name='ellipse' size={24} color={'#fff'} style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: 10 }} />
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </GestureHandlerRootView>
    )
}

export default LightControl