import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../component/global/screen_wrapper'
import Wrapper from '../../component/global/wrapper'

import { colors } from '../../constant'
import { fonts } from '../../constant/fonts'
import { useResponsive } from '../../utils/dimensions'
import { ReactIcon, ReactWhiteIcon } from '../../assets/svg/SvgImg'
import Button from '../../component/button/button'
import { strings } from '../../constant/strings'

const WelcomeScreen = ({ navigation }: any) => {
  const { s, vs, ms, fs } = useResponsive();
  const styles = createStyles(s, vs, ms, fs);

  const welcome = [
    {
      id: 1, tag: "Learn. Practice. Grow."
    },
    {
      id: 2, tag: "Learn React Native the easy way."
    },
    {
      id: 3, tag: "From basics to interviews—RNPrep has you covered."
    }
  ]
  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Wrapper>
          <View style={styles.container}>
            <View style={styles.container_w}>
              <ReactIcon />
           
              <Text style={styles.text}>{strings.WELCOME}</Text>
              <View style={styles.container_t}>
                {
                  welcome.map((item, index) => (
                    <View key={item.id}>
                      <Text style={styles.text_t}>{item.tag}</Text>
                    </View>
                  ))
                }

              </View>

            </View>

            <View style={styles.button} >
              <Button title={"Continue"} onPress={() => navigation.navigate(strings.LOGIN_SCREEN)} />
            </View>


          </View>
        </Wrapper>
      </ScrollView>


    </ScreenWrapper>

  )
}

export default WelcomeScreen

const createStyles = (
  s: (size: number) => number,
  vs: (size: number) => number,
  ms: (size: number) => number,
  fs: (size: number) => number
) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    container_w: {
      alignItems: 'center',
      marginTop: vs(80),
      gap: ms(10)

    },
    text: {
      color: colors.white,
      fontFamily: fonts.bold,
      fontSize: fs(36)

    },
    container_t: {
      alignItems: 'center',
      marginTop: vs(20),
      gap: ms(20)

    },
    text_t: {
      color: colors.white,
      fontFamily: fonts.medium,
      fontSize: fs(14),
      textAlign: 'center'

    },
    button: {
      marginTop: vs(40)
    }
  });