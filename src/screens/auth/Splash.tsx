// import React, { useRef, useEffect } from "react";
// import { Animated, StyleSheet, View, Platform } from "react-native";
// import { height, width } from "../../utils/dimensions";
// import { Images } from "../../constant/images";


// const Splash = () => {
//   const scaleAnim = useRef(new Animated.Value(0.5)).current; // Start at half size

//   useEffect(() => {
//     Animated.spring(scaleAnim, {
//       toValue: 1, // End at full size
//       friction: 5, // Controls "bounciness"
//       tension: 100,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[
//           styles.shadowContainer,
//           {
//             transform: [{ scale: scaleAnim }],
//           },
//         ]}
//       >
//         <Animated.Image
//           // source={Images.duck}
//           source={require("../../assests/image/duck.png")}
//           style={styles.image}
//         />
//       </Animated.View>
//     </View>
//   );
// };

// export default Splash;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   shadowContainer: {
//     // ✅ Cross-platform shadow styles
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 10, // Android shadow
//     backgroundColor: "#fff", // Needed for shadow visibility on iOS
//     borderRadius: width * 0.3, // Make sure shadow follows rounded corners
//     padding: 10, // Optional spacing around the image
//   },
//   image: {
//     width: width * 0.6,
//     height: height * 0.3,
//     resizeMode: "contain",
//   },
// });


import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { Images } from "../../constant/images";

import { colors } from "../../constant";
import { useResponsive } from "../../utils/dimensions";


const SplashScreen = ({ navigation }:any) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const { s, vs, ms, fs } = useResponsive();
   const styles = createStyles(s, vs, ms, fs);
  useEffect(() => {
    // fade in
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // move to next screen
    // const timer = setTimeout(() => {
    //   navigation.replace("Home");
    // }, 2000);

    return 
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={Images.logo}
        style={[styles.logo, { opacity }]}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;



const createStyles = (
  s: (size: number) => number,
  vs: (size: number) => number,
  ms: (size: number) => number,
  fs: (size: number) => number
) =>
  StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor:colors.themelight,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: ms(150),
    height:  vs(150),
    borderRadius:s(50)
  },
  });
