import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../../component/global/screen_wrapper'
import Wrapper from '../../component/global/wrapper'

import { colors } from '../../constant'
import { fonts } from '../../constant/fonts'
import { useResponsive } from '../../utils/dimensions'
import { ReactIcon } from '../../assets/svg/SvgImg'
import Button from '../../component/button/button'
import { strings } from '../../constant/strings'
import emitter from "../../component/Emitter/emitter";
import { setUserNameAsync } from '../../services/auth_helper'
import { useAppContext } from '../../context/AppContext'

const LoginScreen = ({ navigation }: any) => {
  const { s, vs, ms, fs } = useResponsive();
  const styles = createStyles(s, vs, ms, fs);
  const { userName, setUserName, getUser } = useAppContext();
  const [username, setUsername] = useState("");
  const onLogin = async () => {
    if (!username) {
      const data = {
        heading: "error",
        message: `Enter User Name!`
      };
      emitter.emit("alert", data);
      return
    }

    try {
      await setUserNameAsync(username);
      await getUser();
      navigation.replace(strings.BOTTOM_TABS)
    }
    catch (err) {
      console.log(err)
    }


    // 
  }

  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Wrapper>
          <View style={styles.container}>
            <View style={styles.container_l}>
              <ReactIcon />
              <Text style={styles.text}>{strings.LOGIN.LOGIN}</Text>
            </View>
            <View style={styles.input_view}>
              <TextInput
                placeholder="Enter username"
                value={username}
                style={styles.input}
                keyboardType='default'
                maxLength={20}
                placeholderTextColor={colors.placeholder}
                onChangeText={setUsername}
              />
            </View>
            <View style={styles.button} >
              <Button title={strings.LOGIN.LOGIN}
                onPress={() => onLogin()}
              />
            </View>


          </View>
        </Wrapper>
      </ScrollView>


    </ScreenWrapper>

  )
}

export default LoginScreen

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
    container_l: {
      alignItems: 'center',
      marginTop: vs(80),
      gap: ms(10)

    },
    text: {
      color: colors.white,
      fontFamily: fonts.bold,
      fontSize: fs(36)

    },
    input: {
      // flex:1,
      color: colors.white,
      fontFamily: fonts.regular,
      fontSize: fs(14),

    },
    input_view: {
      borderWidth: ms(0.5),
      borderRadius: ms(10),
      paddingHorizontal: ms(10),
      paddingVertical: ms(4),
      marginTop: vs(20),
      backgroundColor: colors.border
    },
    button: {
      marginTop: vs(20)
    }
  });