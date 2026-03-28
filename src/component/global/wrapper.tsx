import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import { useAppContext } from '../../context/AppContext';
import { useResponsive } from '../../utils/dimensions';




const Wrapper = ({ children }: any) => {
      const { s, vs, ms, fs } = useResponsive();
       const styles = createStyles(s, vs, ms, fs);


    return (
        <View style={styles.wrapper}>
            {children}
        </View>
    )
}

export default Wrapper

const createStyles = (
  s: (size: number) => number,
  vs: (size: number) => number,
  ms: (size: number) => number,
  fs: (size: number) => number
) =>
    StyleSheet.create({
        wrapper: {
            flex: 1,
            paddingHorizontal: ms(16),
            
        },
    });