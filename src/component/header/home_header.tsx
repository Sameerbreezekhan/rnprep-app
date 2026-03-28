import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { strings } from '../../constant/strings'

import { colors } from '../../constant'
import { fonts } from '../../constant/fonts'
import { useResponsive } from '../../utils/dimensions'
import { ReactIcon, SaveIcon } from '../../assets/svg/SvgImg'
import { useAppContext } from '../../context/AppContext'
import { useDispatch, useSelector } from 'react-redux'
import { Images } from '../../constant/images'



const HomeHeader = ({ navigation }: any) => {
    const { s, vs, ms, fs } = useResponsive();
    const styles = createStyles(s, vs, ms, fs);
    const { userName } = useAppContext();
    const dispatch = useDispatch();
    const savedQuestions: any = useSelector<any>(
        state => state.saved.savedQuestions
    );
    return (
        <View style={styles.Container}>
            <View style={styles.container}>
                {/* <ReactIcon height={ms(50)} width={ms(50)} /> */}
                       <Image source={Images.logo} style={styles.image} />
                <Text style={styles.text_welcome}>{strings.HOME.GREETING}</Text>
                <Text style={styles.text}>{userName ? userName : "Guest"}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("SavedScreen")}>
                <SaveIcon height={ms(30)} width={ms(30)} active={false} />
                {savedQuestions.length > 0 &&
                    <Text style={styles.text_count}>{savedQuestions.length}</Text>
                }

            </TouchableOpacity>

        </View>
    )
}

export default HomeHeader


const createStyles = (
    s: (size: number) => number,
    vs: (size: number) => number,
    ms: (size: number) => number,
    fs: (size: number) => number
) => StyleSheet.create({
    Container: {
        padding: ms(10),
        paddingHorizontal: ms(10),

        backgroundColor: colors.header,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // subtle bottom shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1, // very light
        shadowRadius: 2,
        elevation: 2, // Android subtle shadow

        // optional: clean line at bottom
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: ms(10)
    },
    text_welcome: {
        fontFamily: fonts.medium,
        fontSize: fs(14),
        color: colors.black,
    },
    text: {
        fontFamily: fonts.bold,
        fontSize: fs(16),
        color: colors.theme,
    },
    text_count: {
        fontFamily: fonts.bold,
        fontSize: fs(8),
        color: colors.white,
        position: 'absolute',
        alignSelf: 'flex-end',

        top: vs(0),
        backgroundColor: colors.red,
        borderRadius: ms(8),
        paddingHorizontal: ms(4),
        paddingVertical: ms(2),
        minWidth: ms(16),
        textAlign: 'center',


    },
     image: {
            height: ms(60),
            width: ms(60),
            alignSelf: 'center',
            borderRadius: ms(100),
            resizeMode: 'cover',
           
        }
});

