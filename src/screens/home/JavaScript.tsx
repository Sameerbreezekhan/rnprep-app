import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../../constant'
import { fonts } from '../../constant/fonts'
import { useResponsive } from '../../utils/dimensions'
import { CodeIcon, JSIcon, ReactIcon, ReactWhiteIcon } from '../../assets/svg/SvgImg'
import ScreenWrapper from '../../component/global/screen_wrapper'
import Wrapper from '../../component/global/wrapper'
import AppHeader from '../../component/header/app_header'
import ListCard from '../../component/home/ListCard'
import { JavaScriptQuestions } from '../../constant/questions/JavaScriptQuestions'
import { ReactNativeQuestions } from '../../constant/questions/ReactNativeQuestions'
import { CodingQuestions } from '../../constant/questions/CodingQuestions'
import { TypeScriptQuestions } from '../../constant/questions/TypeScriptQuestions'
import { useRoute } from '@react-navigation/native'


const JavaScript = ({ navigation }: any) => {
    const { s, vs, ms, fs, width } = useResponsive()
    const styles = createStyles(ms, fs, width)
    const scrollRef = useRef<ScrollView>(null)
    const [currentIndex, setCurrentIndex] = useState(0);
    // const data = JavaScriptQuestions;
    const route = useRoute<any>();
    const [data, setData] = useState<any>()
    useEffect(() => {
        if (route?.params?.data) {
            if (route?.params?.data?.id == 1) {
                setData(ReactNativeQuestions)
            }
            else if (route?.params?.data?.id == 2) {
                setData(JavaScriptQuestions)
            }
              else if (route?.params?.data?.id == 3) {
                setData(CodingQuestions)
            }
              else if (route?.params?.data?.id == 4) {
                setData(TypeScriptQuestions)
            }

        }

    }, [route?.params])



    return (
        <ScreenWrapper>
           
                <AppHeader title={route?.params?.data?.tag} showBack={true} />
               {/* <ScrollView showsVerticalScrollIndicator={false}> */}
                <Wrapper>
                    <ListCard navigation={navigation} data={data} />
                </Wrapper>
            {/* </ScrollView> */}
        </ScreenWrapper>
    )
}

export default JavaScript
const createStyles = (ms: any, fs: any, width: any) =>
    StyleSheet.create({
        card: {
            width: width,
            flexDirection: 'row',
            alignItems: 'center',
            padding: ms(20),
            gap: ms(10),
            borderRadius: ms(12),

            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,

        },
        text: {
            fontFamily: fonts.medium,
            fontSize: fs(16),
            color: colors.white,
        },
    })
