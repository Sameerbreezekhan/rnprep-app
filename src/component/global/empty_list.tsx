import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import { useAppContext } from '../../context/AppContext';
import { useResponsive } from '../../utils/dimensions';
import { fonts } from '../../constant/fonts';




const ListEmptyComponent = ({ children,titel }: any) => {
      const { s, vs, ms, fs } = useResponsive();
       const styles = createStyles(s, vs, ms, fs);


    return (
        <View style={styles.container}>
        <Text style={styles.text}>{titel}</Text>
        </View>
    )
}

export default ListEmptyComponent

const createStyles = (
  s: (size: number) => number,
  vs: (size: number) => number,
  ms: (size: number) => number,
  fs: (size: number) => number
) =>
    StyleSheet.create({
       container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
       },
       text:{
        fontSize:fs(16),
        color:"#666",
        fontFamily:fonts.regular,
        marginTop:vs(40)
       }
    });