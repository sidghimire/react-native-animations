import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Circle, Svg } from 'react-native-svg'
import Animated, { interpolate, useAnimatedProps, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const data = [
    {
        percent: 0.5,
        color: '#fd8a8a',
        task: 'cardio'
    },
    {
        percent: 0.15,
        color: '#9ea1d4',
        task: 'bench press'
    },
    {
        percent: 0.15,
        color: '#a8d1d1',
        task: 'pull ups'
    },

]

const AnalyticsApp = () => {
    const size = 250
    const center = size / 2
    const strokeWidth = 70
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const [angles, setAngles] = useState<number[]>([])
    const progress = useSharedValue(0);
    useEffect(() => {

        load()
    }, [])
    const load = () => {
        let angle = 0
        const adjusted: number[] = []
        data.map((item) => {
            adjusted.push(angle)
            angle = angle + item.percent * 360
        })
        setAngles(adjusted)
        progress.value = 0;
        progress.value = withTiming(1, {
            duration: 2000,
        });
    }

    const PieChart = ({ center, size, radius, strokeWidth, circumference, percent, color, rotation }: any) => {
        const animatedProps = useAnimatedProps(() => {
            const rotateAngle = interpolate(progress.value, [0, 1], [0, rotation])
            const strokeDashoffset = interpolate(progress.value, [0, 1], [circumference, (1 - percent + 0.02) * circumference])
            return {
                strokeDashoffset,
                transform: [
                    { translateX: center + radius + strokeWidth / 2 },
                    { translateY: center + radius + strokeWidth / 2 },
                    { rotate: `${rotateAngle}deg` },
                    { translateX: -center },
                    { translateY: -center },
                ]
            }
        })
        return (
            <AnimatedCircle
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
                stroke={color}
                fill={'none'}
                strokeDasharray={circumference}
                animatedProps={animatedProps}
                originX={center}
                originY={center}
                strokeLinecap={"round"}
            />
        )
    }

    return (
        <SafeAreaView className='flex flex-col h-full'>
            <View>
                <View className='flex flex-row p-4'>
                    <Pressable onPress={() => {
                        data.push({
                            percent: 0.2,
                            color: '#77dd77',
                            task: 'jumping jack'
                        });
                        load()
                    }} className='w-10 h-10 rounded-full border border-gray-200 items-center justify-center mr-auto'>
                        <Icon name='git-network-outline' size={16} color={'#6f6f6f'} />
                    </Pressable>
                    <Text className='text-[20px] my-auto font-bold'>Analytics</Text>
                    <Pressable onPress={load} className='w-10 h-10 rounded-full border border-gray-200 items-center justify-center ml-auto'>
                        <Icon name='trending-up-outline' size={16} color={'#6f6f6f'} />
                    </Pressable>
                </View>
                <View className='items-center  mb-auto mx-auto flex flex-col mt-7' style={{ height: size, width: size, transform: [{ rotateZ: '-90deg' }], }}>
                    <Svg viewBox={`0 0 ${size} ${size}`}>
                        {data.map((item: any, key: number) => {
                            return (
                                <PieChart key={key} size={size} center={center} radius={radius} strokeWidth={strokeWidth} circumference={circumference} percent={item.percent} color={item.color} rotation={angles[key]} />
                            )
                        })}
                    </Svg>

                </View>
                <View className='flex flex-row px-4 mt-10'>
                    {data.map((item: any) => (
                        <View className='flex flex-col flex-1'>
                            <View className='w-8 h-8 rounded-lg mx-auto' style={{ backgroundColor: item.color }}></View>
                            <Text className='mt-2 tracking-tighter font-light text-center text-[12px] capitalize'>{item.task}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <View className='bg-black m-4 p-8 px-5 rounded-[34px] flex flex-col mt-auto'>
                <View className='flex flex-row justify-center'>
                    <View className='flex flex-col'>
                        <Text className='text-white font-black text-2xl'>Miles Run</Text>
                        <Text className='text-gray-300 font-light text-sm'>This Month</Text>
                    </View>
                    <View className='flex flex-col ml-auto justify-center'>
                        <Text className='text-white font-light text-2xl'>1000.2</Text>
                    </View>
                </View>
                <View className='bg-white p-3 py-6 rounded-[30px] my-4 flex flex-row'>
                    <View className='items-center flex flex-col flex-1 space-y-3'>
                        <Text className='text-gray-600 font-light text-[14px]'>Time</Text>
                        <Text className='text-gray-800 font-bold text-[24px]'>42 hr</Text>
                    </View>
                    <View className='items-center flex flex-col flex-1 space-y-3'>
                        <Text className='text-gray-600 font-light text-[14px]'>Weight Loss</Text>
                        <Text className='text-gray-800 font-bold text-[24px]'>20 lb</Text>
                    </View>
                    <View className='items-center flex flex-col flex-1 space-y-3'>
                        <Text className='text-gray-600 font-light text-[14px]'>Calories</Text>
                        <Text className='text-gray-800 font-bold text-[24px]'>10,000</Text>
                    </View>
                  
                </View>
            </View>
        </SafeAreaView>
    )
}






export default AnalyticsApp