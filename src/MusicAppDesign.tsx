import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient'
import LottieView from 'lottie-react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
const MusicAppDesign = () => {
    const progressWidth = useSharedValue(0)
    const progressStyle = useAnimatedStyle(() => ({
        width: progressWidth.value,
        height: 8,
        borderRadius: 10,
        backgroundColor: '#D86ABB',
        position: 'absolute'
    }))
    const [playing, setPlaying] = useState(false)
    function startAnimation() {
        setPlaying(true)
        progressWidth.value = withTiming(330, { duration: 10000,easing:Easing.linear })

    }
    function stopAnimation() {
        setPlaying(false)
        progressWidth.value = progressWidth.value
    }
    function restart(){
        progressWidth.value=0
        startAnimation()
    }
    
    return (
        <SafeAreaView className='bg-[#7C71AE] flex-1'>
            <View className='px-4 flex flex-row mt-2'>
                <Icon name='chevron-down' color={'#e4e1ed'} size={28} />
                <View className='mx-auto'>
                    <Text className='my-auto mx-auto font-bold tracking-tight text-[#fff] text-[14px]'>Now Playing</Text>
                </View>
                <Icon name='heart' color={'#c3bdd4'} size={28} />
            </View>

            <View>
                <LinearGradient
                    colors={['#988dc6', '#a79cc6', '#988dc6']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    className='w-10/12 h-96 rounded-[60px] mx-auto my-7'
                >
                </LinearGradient>
                <View className='w-full h-full items-center justify-center absolute'>
                    <LottieView source={require('../assets/yoga.json')} autoPlay loop />
                </View>
            </View>
            <View className='flex flex-col'>
                <Text className='mx-auto text-[12px] text-[#c3bdd4] font-bold mt-4 tracking-tighter'>Yoga Session</Text>
                <Text className='mx-auto text-[32px] text-[#c3bdd4] font-black mt-1'>Lofi Beats</Text>
            </View>
            <View className=' mt-16 flex flex-col'>
                <View className='mx-auto w-[330px]'>
                    <View className=' bg-[#a79cc6] h-[8px] w-full mx-auto rounded-full'>
                    </View>
                    <Animated.View style={[progressStyle]}>

                    </Animated.View>
                </View>

                <View className='flex flex-row mt-6'>
                    <Pressable className='flex-1 items-center'>
                        <Icon name='ellipsis-vertical-outline' size={20} color={'#c3bdd4'} style={{ marginBottom: 'auto', marginTop: 'auto' }} />
                    </Pressable>
                    <Pressable onPress={()=>restart()} className='flex-1 items-center'>
                        <Icon name='play-skip-back' size={20} color={'#c3bdd4'} style={{ marginBottom: 'auto', marginTop: 'auto' }} />
                    </Pressable>
                    <LinearGradient
                        colors={['#988dc6', '#988dc6']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        className='p-4 rounded-2xl mx-auto'
                    >
                        <Pressable onPress={() => playing ? stopAnimation() : startAnimation()} className='p-3 rounded-full bg-[#f5b8d8] items-center'>
                            <Icon name={playing ? 'pause' : 'play'} size={24} color={'#7C71AE'} />
                        </Pressable>
                    </LinearGradient>
                    <Pressable className='flex-1 items-center '>
                        <Icon name='play-skip-forward' size={24} color={'#c3bdd4'} style={{ marginBottom: 'auto', marginTop: 'auto' }} />
                    </Pressable>
                    <Pressable className='flex-1 items-center'>
                        <Icon name='shuffle-outline' size={24} color={'#c3bdd4'} style={{ marginBottom: 'auto', marginTop: 'auto' }} />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MusicAppDesign