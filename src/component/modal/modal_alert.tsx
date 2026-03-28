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



const ModalAlert = ({ visible, heading, titel, onClose, onSuccess, children }: any) => {
    const { s, vs, ms, fs, width } = useResponsive()
    const styles = createStyles(s, vs, ms, fs, width)
    const { userName, logOutContext } = useAppContext();





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
                    <Text style={styles.Text} >{heading}</Text>
                    <View>
                        <Text style={styles.text}>{titel}</Text>
                    </View>

                    <View style={styles.buttonView} >
                        <TouchableOpacity style={styles.button} onPress={() => onSuccess()}>
                            <Text style={styles.textButton}>{"Yes"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: colors.theme }]}
                            onPress={() => onClose()}

                        >
                            <Text style={styles.textButton}>{"No"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalAlert;
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
        text: {
            fontSize: fs(16),
            color: colors.black,
            fontFamily: fonts.regular,
            marginVertical: vs(10)
        },

        textButton: {
            fontSize: fs(16),
            color: colors.white,
            fontFamily: fonts.bold
        },


        buttonView: {

            marginTop: vs(10),
            flexDirection: 'row',
            gap: ms(50)
        },

        button: {
            flex: 1,
            backgroundColor: colors.red,
            padding: ms(8),
            borderRadius: ms(10),
            alignItems: 'center'

        }
    });
