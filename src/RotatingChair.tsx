import { View, Text, Image, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import LottieView from 'lottie-react-native';

const width = Dimensions.get('screen').width

const RotatingChair = () => {
    return (
        <View className='bg-[#bb9490] flex-1 flex flex-col'>
            <View>
                <Pressable className='w-12 h-12 rounded-full items-center justify-center mt-12 ml-4'>
                    <Icon name='chevron-back-outline' color='#000' size={24} />
                </Pressable>
            </View>
            <Image style={{ width: 350, height: 350 }} className='rounded-xl mx-auto mt-4' source={require('../assets/gif1.gif')} />
            <View className='mx-5 mt-5'>
                <Text className='text-[12px] text-[#fff] ml-2 font-light'>Oakwood</Text>
                <Text className='text-[30px] text-[#fff] ml-2 font-bold'>Sunshine Eleganza Oak Wood Chair</Text>
            </View>
            <View className='flex flex-row mx-6 space-x-4'>
                <View className='flex flex-row flex-1'>
                    <View className='h-32 my-auto mt-4 w-full bg-white rounded-lg flex flex-row'>
                        <View className='h-28 my-auto w-full bg-white rounded-lg '>
                            <LottieView source={require('../assets/barGraph.json')} autoPlay loop speed={0.5} />
                        </View>
                       
                    </View>
                </View>
                <View className='flex flex-col flex-1 py-4 '>
                    <View className='h-32 my-auto w-full flex flex-col space-y-2'>

                        <View className='flex-1 bg-white rounded-lg flex flex-col px-4 py-2'>
                            <View className='flex flex-row space-x-3'>
                                <Icon name='filter-outline' color={"#00798C"} size={16} />
                                <Text className='text-[12px] font-light my-auto'>In stock</Text>
                            </View>
                            <View className='border-t border-t-gray-200 mt-2 flex flex-row space-x-3 py-2'>
                                <Icon name='calendar-outline' color={"#7f7f7f"} size={16} />
                                <Text className='text-[10px] font-light my-auto text-gray-600'>Delivery:</Text>
                                <Text className='text-[10px] font-light my-auto text-black'>Tomorrow</Text>
                            </View>
                        </View>
                        <View className='flex-1 bg-[#577399] rounded-lg flex flex-row px-2 '>
                            <View className='my-auto flex flex-row space-x-3 px-2'>
                                <Icon name='star-outline' color={"#fff"} size={20} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                <Text className='font-bold text-xl my-aut text-white'>4.6</Text>
                            </View>
                            <View className='my-auto flex flex-row space-x-3 pl-1'>

                                <Text className='font-bold text-[12px] my-auto text-center mx-auto tracking-tighter text-white'>28 reviews</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
            <View className='mt-auto mb-10 px-3 w-full'>
                <View className=' p-4 flex flex-row w-full space-x-4'>
                    <View>
                        <Pressable className='w-12 h-12 rounded-full items-center justify-center bg-[#576490]'>
                            <Icon name='basket' color='#fff' size={20} />
                        </Pressable>
                    </View>
                    <View className='flex-1'>
                        <Pressable className='flex-1 bg-black p-4 rounded-full'>
                            <Text className='font-medium text-center text-white text-[14px]'>
                                Add To Bag
                            </Text>
                        </Pressable>
                    </View>
                    <View>
                        <Pressable className='w-12 h-12 rounded-full items-center justify-center bg-[#576490]'>
                            <Icon name='apps' color='#fff' size={20} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RotatingChair