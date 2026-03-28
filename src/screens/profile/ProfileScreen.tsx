

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../../constant'
import { fonts } from '../../constant/fonts'
import { useResponsive } from '../../utils/dimensions'
import { AboutIcon, CodeIcon, EditIcon, JSIcon, PrivacyIcon, ReactIcon, ReactWhiteIcon, SaveIcon, SaveWhiteIcon } from '../../assets/svg/SvgImg'
import ScreenWrapper from '../../component/global/screen_wrapper'
import Wrapper from '../../component/global/wrapper'
import AppHeader from '../../component/header/app_header'
import { useAppContext } from '../../context/AppContext'
import CustomModal from '../../component/modal/modal'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { strings } from '../../constant/strings'
import ModalLogOut from '../../component/modal/modal_alert'
import emitter from '../../component/Emitter/emitter'
import ModalAlert from '../../component/modal/modal_alert'
import { Images } from '../../constant/images'



const ProfileScreen = ({ navigation }: any) => {
  const { s, vs, ms, fs, width } = useResponsive()
  const styles = createStyles(s, vs, ms, fs, width)
  const { userName, logOutContext } = useAppContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [logOutModalVisible, setLogOutModalVisible] = useState(false);

  const Data = [
    { id: 1, tag: "About" },

  ]

  const onLogOut = async () => {
    await logOutContext();
    setLogOutModalVisible(false)
    const data = {
      heading: "success",
      message: `LogOut Sucessfully`
    };
    emitter.emit("alert", data);
  }






  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          // paddingTop: height * 0.07,
          // paddingBottom: height * 0.02,
          flex: 1
        }}
      >
        <AppHeader title={"Profile"} showBack={false} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Wrapper>
            <View style={styles.container_user}>
              {/* <ReactIcon height={ms(120)} width={ms(120)} /> */}
              <Image source={Images.logo} style={styles.image} />
              <TouchableOpacity style={styles.Row} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.Text}>{userName}</Text>
                <EditIcon height={ms(16)} width={ms(16)} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("SavedScreen")}>
              <SaveWhiteIcon height={ms(18)} width={ms(18)} />
              <Text style={styles.text}>{"Saved"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("AboutUsScreen")}>
              <AboutIcon height={ms(18)} width={ms(18)} />
              <Text style={styles.text}>{"About Us"}</Text>
            </TouchableOpacity>



            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("PrivacyPolicyScreen")}>
              <PrivacyIcon height={ms(2)} width={ms(2)} />
              <Text style={styles.text}>{"Privacy Policy"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.log_card} onPress={() => setLogOutModalVisible(!modalVisible)}>
              <Text style={styles.text_log}>{"Log Out"}</Text>
            </TouchableOpacity>
          </Wrapper>
        </ScrollView>
        <CustomModal visible={modalVisible} onClose={() => setModalVisible(!modalVisible)} />
        <ModalAlert
          visible={logOutModalVisible}
          heading={strings.LOG_OUT}
          titel={strings.LOG_OUT_MESSAGE}
          onSuccess={() => onLogOut()}
          onClose={() => setLogOutModalVisible(!logOutModalVisible)}
        />
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  )
}

export default ProfileScreen
const createStyles = (s: any, vs: any, ms: any, fs: any, width: any) =>
  StyleSheet.create({
    container_user: {
      marginTop: ms(20),
      alignItems: "center",
      gap: ms(10),
      borderBottomWidth: ms(0.5),
      borderBottomColor: colors.border,


    },
    card: {
      marginTop: vs(20),
      padding: ms(16),
      borderRadius: ms(12),
      borderColor: "rgba(255,255,255,0.08)",
      borderWidth: ms(0.5),
      backgroundColor: colors.black,
      flexDirection: 'row',
      alignItems: "center",
      gap: ms(8)

    },
    log_card: {
      marginTop: vs(20),
      padding: ms(16),
      flexDirection: 'row',
      alignItems: "center",
    },
    Row: {

      flexDirection: 'row',
      alignItems: "center",
      marginBottom: vs(8)


    },
    row: {

      flexDirection: 'row',
      alignItems: "center",
      gap: ms(4)
      // marginBottom: vs(8)


    },

    Text: {
      fontFamily: fonts.bold,
      fontSize: fs(16),
      color: colors.theme,
    },
    text: {
      fontFamily: fonts.regular,
      fontSize: fs(16),
      color: colors.white,
    },
    text_log: {
      fontFamily: fonts.bold,
      fontSize: fs(16),
      color: colors.red,
    },
    image: {
      height: ms(140),
      width: ms(140),
      alignSelf: 'center',
      borderRadius: ms(100),
      resizeMode: 'cover',

    }

  })
