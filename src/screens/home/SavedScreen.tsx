import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native'
import React, { use, useEffect, useRef, useState } from 'react'
import { colors } from '../../constant'
import { fonts } from '../../constant/fonts'
import { useResponsive } from '../../utils/dimensions'
import { CodeIcon, JSIcon, ReactIcon, ReactWhiteIcon } from '../../assets/svg/SvgImg'
import ScreenWrapper from '../../component/global/screen_wrapper'
import Wrapper from '../../component/global/wrapper'
import AppHeader from '../../component/header/app_header'
import ListCard from '../../component/home/ListCard'

import { useDispatch, useSelector } from 'react-redux'
import { idConverter } from '../../utils/functions'
import SaveCard from '../../component/home/SaveCard'


const SavedScreen = ({ navigation }: any) => {
    const { s, vs, ms, fs, width } = useResponsive()
    const styles = createStyles(ms, fs, width)
    const dispatch = useDispatch();
    const savedQuestions: any = useSelector<any>(
        state => state.saved.savedQuestions
    );
 








    return (
        <ScreenWrapper>

            <AppHeader title={"Saved Questions"} showBack={true}  showSave={false} />
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <Wrapper>
                <SaveCard navigation={navigation} data={savedQuestions}  />
            </Wrapper>
            {/* </ScrollView> */}
        </ScreenWrapper>
    )
}

export default SavedScreen
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
