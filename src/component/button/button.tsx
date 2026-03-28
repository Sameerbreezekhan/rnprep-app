import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import { colors } from "../../constant";
import { useResponsive } from "../../utils/dimensions";
import { fonts } from "../../constant/fonts";



const Button = ({ title, onPress, loading, style }: any) => {
   const { s, vs, ms, fs } = useResponsive();
    const styles = createStyles(s, vs, ms, fs);
  return (
    <>
      <TouchableOpacity
        style={[styles.button, { ...style }]}
        onPress={onPress}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color={colors.theme} size={ms(10)} />
        ) : (
          <Text style={styles.button_text}>{title}</Text>
        )}
      </TouchableOpacity>
    </>
  );
};

export default Button;

const createStyles = (
  s: (size: number) => number,
  vs: (size: number) => number,
  ms: (size: number) => number,
  fs: (size: number) => number
) =>
  StyleSheet.create({
  button: {
    backgroundColor: colors.button,
    padding: ms(12),
    borderRadius: s(100),
    alignItems: "center",
    justifyContent: "center"
  },
  button_text: {
    fontSize: fs(18),
    fontFamily: fonts.medium,
    alignSelf: "center",
    color: colors.white,
   
  },
  loader: {
    color: colors.theme
  }
});
