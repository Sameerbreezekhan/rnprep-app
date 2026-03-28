import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constant'

const ScreenWrapper = ({ children }: any) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container} >
        {children}
      </SafeAreaView>
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },

}

)