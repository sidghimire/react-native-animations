import * as React from "react"
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from "react-native-svg"

function PercentSlider() {
  return (
    <Svg
      width={70}
      height={2228}
      viewBox="0 0 107 2528"
      fill="none"
  
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 2528h13V1344c0-16.57-14.567-29.36-28.233-38.73C21.623 1296.26 13 1281.14 13 1264c0-17.14 8.623-32.26 21.767-41.27C48.433 1213.36 63 1200.57 63 1184V0H50v1179c0 19.33-17.432 34.3-32.21 46.76C6.91 1234.93 0 1248.66 0 1264c0 15.34 6.91 29.07 17.79 38.24C32.568 1314.7 50 1329.67 50 1349v1179z"
        fill="url(#paint0_linear_18_552)"
      />
      <Circle
        cx={76}
        cy={1264}
        r={30.5}
        transform="rotate(-90 76 1264)"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_18_552"
          x1={63}
          y1={2528}
          x2={63.0001}
          y2={-0.00000361819}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E30000" />
          <Stop offset={0.248208} stopColor="#5E45A6" />
          <Stop offset={0.427945} stopColor="#FF7A00" />
          <Stop offset={0.651698} stopColor="#F09F54" />
          <Stop offset={0.804931} stopColor="#4000F7" />
          <Stop offset={1} stopColor="#FF2727" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default PercentSlider
