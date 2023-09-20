import { View, Text, ImageBackground, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import Icon from 'react-native-vector-icons/Ionicons'

const BlurDashboard = () => {
    return (
        <ImageBackground blurRadius={3} className='flex-1' source={require("../assets/scene.jpg")}>
            <View className='flex-1 flex flex-col pt-14'>

                <View className='flex flex-row px-4 space-x-4 mt-6'>
                    <Image blurRadius={2} source={require('../assets/house.jpg')} className='w-12 h-12 rounded-full my-auto' />
                    <BlurView intensity={20} style={{ overflow: 'hidden' }} className='bg-white flex-1 p-2 rounded-full flex flex-row'>
                        <Image source={require('../assets/profile.jpg')} className='w-10 h-10 rounded-full my-auto' />
                        <View className='justify-center pl-3'>
                            <Text className='font-medium tracking-tighter text-gray-700 text-[14px]'>
                                Rolling in the deep
                            </Text>
                            <Text className='font-medium tracking-tighter text-gray-700 text-[11px]'>
                                Adele
                            </Text>
                        </View>
                        <View className='w-10 h-10 rounded-full border-2 border-gray-200 ml-auto items-center justify-center'>
                            <Icon name='square' color={"#9f9f9f"} />
                        </View>
                    </BlurView>
                    <View className='rounded-full bg-[#ffffff9f] p-3 w-14 h-14 items-center'>
                        <Icon size={18} name='search' style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                    </View>
                </View>
                <View className='flex flex-col px-4 mt-10'>
                    <Text className='text-white text-[28px] font-light tracking-tighter'>
                        Sid
                    </Text>
                    <Text className='text-white text-[40px] mt-1 font-bold tracking-tighter'>
                        What's up? Good to see you !
                    </Text>
                    <View className='flex flex-row mt-6'>
                        <View className='flex-1  flex flex-col item-center'>
                            <View className='w-14 h-14 bg-white rounded-full mx-auto items-center justify-center opacity-40'>
                                <Icon name='add' color={"#000"} size={24} />
                            </View>
                            <Text className='text-white font-light tracking-tighter text-center mt-2'>Add New</Text>
                        </View>
                        <View className='flex-1  flex flex-col'>
                            <Image source={require('../assets/profile/profile1.jpg')} className='w-14 h-14 rounded-full my-auto mx-auto' />
                            <Text className='text-white font-light tracking-tighter text-center mt-2'>Alice</Text>
                        </View>
                        <View className='flex-1  flex flex-col'>
                            <Image source={require('../assets/profile/profile2.jpg')} className='w-14 h-14 rounded-full my-auto mx-auto' />
                            <Text className='text-white font-light tracking-tighter text-center mt-2'>Peter</Text>
                        </View>
                        <View className='flex-1  flex flex-col'>
                            <Image source={require('../assets/profile/profile3.jpg')} className='w-14 h-14 rounded-full my-auto mx-auto' />
                            <Text className='text-white font-light tracking-tighter text-center mt-2'>Alan</Text>
                        </View>
                        <View className='flex-1  flex flex-col'>
                            <Image source={require('../assets/profile/profile4.jpg')} className='w-14 h-14 rounded-full my-auto mx-auto' />
                            <Text className='text-white font-light tracking-tighter text-center mt-2'>Robert</Text>
                        </View>

                    </View>
                </View>
                <View className='flex flex-row mt-5'>
                    <View className='flex-1 h-48 p-4 items-center justify-center'>
                        <Image source={require('../assets/white.jpg')} blurRadius={10} className='h-full w-full bg-white rounded-xl opacity-20 absolute' />
                        <Image source={require('../assets/profile/profile3.jpg')} className='w-10 h-10 rounded-full top-8 right-8 absolute' />
                        <Text className='text-white text-[16px] font-thin tracking-tighter absolute top-8 left-7'>
                            27 April
                        </Text>
                        <Text className='text-white text-[16px] font-thin tracking-tighter absolute top-[70px] left-7'>
                            Monday
                        </Text>
                        <Text className='text-white text-[24px] font-medium tracking-tighter absolute top-[90px] left-7'>
                            10:00 - 12:00
                        </Text>
                    </View>
                    <View className='flex-1 h-48 p-4 items-center justify-center'>
                        <Image source={require('../assets/white.jpg')} blurRadius={10} className='h-full w-full bg-white rounded-full opacity-20 absolute' />
                        <Image source={require('../assets/model3d.jpg')} className='w-28 h-28 rounded-full mx-auto my-auto ' />

                    </View>

                </View>
                <View className='w-11/12 bg-white flex-1 mx-auto rounded-t-[60px] mt-5 '>
                    <View className='flex flex-row pt-10 px-10'>
                        <Text className='font-bold text-black tracking-tighter text-[24px]'>Privacy</Text>
                        <Text className='font-medium text-black tracking-tighter text-[14px] my-auto ml-auto'>All</Text>
                    </View>
                    <View className='flex flex-row px-7 space-x-4 mt-6 '>
                        <BlurView intensity={20} style={{ overflow: 'hidden' }} className='bg-black flex-1 p-2 rounded-full flex flex-row'>
                            <Image source={require('../assets/profile/profile3.jpg')} className='w-10 h-10 rounded-full my-auto' />
                            <View className='justify-center pl-3'>
                                <Text className='font-medium tracking-tighter text-gray-100 text-[14px]'>
                                    Meeting At 10
                                </Text>
                                <Text className='font-medium tracking-tighter text-gray-100 text-[11px]'>
                                    Adele
                                </Text>
                            </View>
                            <View className='w-10 h-10 rounded-full border border-gray-200 ml-auto items-center justify-center'>
                                <Icon name='location' color={"#cfcfcf"} size={14} />
                            </View>
                        </BlurView>

                    </View>
                    <View className='flex flex-row px-7 space-x-4 mt-2 '>
                        <BlurView intensity={20} style={{ overflow: 'hidden' }} className='bg-white flex-1 p-2 rounded-full flex flex-row border-2 border-gray-300'>
                            <Image source={require('../assets/profile/profile2.jpg')} className='w-10 h-10 rounded-full my-auto' />
                            <View className='justify-center pl-3'>
                                <Text className='font-medium tracking-tighter text-gray-700 text-[14px]'>
                                    Meeting At 10
                                </Text>
                                <Text className='font-medium tracking-tighter text-gray-700 text-[11px]'>
                                    Adele
                                </Text>
                            </View>
                            <View className='w-10 h-10 rounded-full border border-gray-700 ml-auto items-center justify-center'>
                                <Icon name='location' color={"#9f9f9f"} size={14} />
                            </View>
                        </BlurView>

                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default BlurDashboard