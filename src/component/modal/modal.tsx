import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput
} from "react-native";
import { useResponsive } from "../../utils/dimensions";
import { fonts } from "../../constant/fonts";
import { colors } from "../../constant";
import { useAppContext } from "../../context/AppContext";
import emitter from "../Emitter/emitter";
import { setUserNameAsync } from "../../services/auth_helper";
import { strings } from "../../constant/strings";
import Button from "../button/button";



const CustomModal = ({ visible, onClose, children }: any) => {
  const { s, vs, ms, fs, width } = useResponsive()
  const styles = createStyles(s, vs, ms, fs, width)
  const { userName, setUserName, getUser } = useAppContext();
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (userName) {
      setUsername(userName)
    }
  }, [])

  const onLogin = async () => {
    if (!username) {
      const data = {
        heading: "error",
        message: `Enter User Name!`
      };
      emitter.emit("alert", data);
      return
    }
    if (username == userName) {
      onClose()
      return
    }

    try {
      await setUserNameAsync(username);
      await getUser();

      onClose()
      const data = {
        heading: "success",
        message: `User Name Changed`
      };
      emitter.emit("alert", data);


    }
    catch (err) {
      console.log(err)
    }


    // 
  }
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Cross Button */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>{'×'}</Text>
          </TouchableOpacity>
          <Text style={styles.Text} >{"Edit"}</Text>
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
            <Button title={"Update"}
              onPress={() => onLogin()}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
const createStyles = (s: any, vs: any, ms: any, fs: any, width: any) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.5)",
      justifyContent: "center",
      alignItems: "center"
    },
    modalContainer: {
      width: width * 0.9,
      backgroundColor: "#fff",
      borderRadius: ms(10),
      padding: ms(20),
      position: "relative",
      elevation: ms(10)
    },
    closeBtn: {
      position: "absolute",
      //  paddingVertical:ms(2),
      paddingHorizontal: ms(8),
      borderRadius: ms(50),
      backgroundColor: "#fff",
      right: ms(10),
      top: ms(10),

      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 6,

      justifyContent: "center",
      alignItems: "center",
      zIndex: 1,
      alignSelf: "flex-end"
    },

    closeText: {
      fontSize: fs(25),
      color: colors.theme,
      fontFamily: fonts.regular
    },
    Text: {
      fontSize: fs(16),
      color: colors.black,
      fontFamily: fonts.bold
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
