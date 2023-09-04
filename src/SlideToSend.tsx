import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedReaction, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { useEffect, useState } from 'react';

export default function SlideToSend() {
  const pressed = useSharedValue(false);
  const offset = useSharedValue(0);
  const buttonWidth = useSharedValue(280);
  const padding = useSharedValue(5);
  const isLoading = useSharedValue(false)
  const [showLoading, setShowLoading] = useState("chevron")
  const rotation = useSharedValue(0);
  const sliderColor = useSharedValue('#003399')
  const [success, setSucess] = useState(false)

  const [colorPair, setColorPair] = useState(['#006EB3', '#00AEEF'])

  const pan = Gesture.Pan()
    .onBegin(() => {

      pressed.value = true;
    })
    .onChange((event) => {
      if (isLoading.value != true) {
        if (event.absoluteX > 300) {
          buttonWidth.value = withTiming(66);
          offset.value = withSpring(0);
          padding.value = 5;
          isLoading.value = true
          //run settimeout here
        }
        if (event.absoluteX < 324 && event.absoluteX > 115) {
          offset.value = event.translationX;
        }
      }

    })
    .onFinalize(() => {
      offset.value = withSpring(0);
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));


  const animatedDiv = useAnimatedStyle(() => ({
    width: buttonWidth.value,
    padding: padding.value,
    backgroundColor: sliderColor.value
  }));

  useAnimatedReaction(
    () => isLoading.value,
    () => {
      if (isLoading.value == true) {
        runOnJS(setShowLoading)("loading")
        runOnJS(changeToTick)()
      }

    }
  )
  function changeToTick() {
    setTimeout(() => {
      sliderColor.value = "#006400";
      setColorPair(['#50c878', "#088f8f"]);
      setSucess(true)

    }, 3000);
  }

  const rotatingIcon = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const rotate = () => {
    rotation.value = withSpring(rotation.value + 360, { stiffness: 20 });
    requestAnimationFrame(rotate);
  };

  useEffect(() => {
    rotate();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>

      <LinearGradient
        colors={colorPair}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.fullContainer}
      >
        <Animated.View style={[animatedDiv]} className='my-auto mx-auto rounded-full'>
          <GestureDetector gesture={pan}>
            {!success ?
              <Animated.View style={[animatedStyles]} className='w-14 h-14 rounded-full bg-white'>
                <View className='mx-auto my-auto'>
                  {showLoading == 'loading' && (
                    <Animated.View style={[rotatingIcon]}>
                      <AntDesign name='loading1' size={20} color="#003399" />
                    </Animated.View>
                  )}
                  {showLoading == 'chevron' && (
                    <Icon name='chevron-forward' size={20} color="#003399" />
                  )}
                </View>
              </Animated.View>
              :
              <Animated.View style={[animatedStyles]} className='w-14 h-14 rounded-full bg-white'>
                <View className='mx-auto my-auto'>
                  <Animated.View  >
                    <AntDesign name='check' size={24} color="#006400" />
                  </Animated.View>
                </View>
              </Animated.View>
            }
          </GestureDetector>
        </Animated.View>
      </LinearGradient>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {},
  fullContainer: {
    width: '100%',
    height: '100%',
  },

});
