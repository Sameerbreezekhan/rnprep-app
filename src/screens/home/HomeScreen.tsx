import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppContext } from '../../context/AppContext';
import ScreenWrapper from '../../component/global/screen_wrapper';
import Wrapper from '../../component/global/wrapper';
import { fonts } from '../../constant/fonts';
import { useResponsive } from '../../utils/dimensions';
import HomeHeader from '../../component/header/home_header';
import HomeBanner from '../../component/home/HomeBanner';
import HomeCard from '../../component/home/HomeCard';

const HomeScreen = ({ navigation }: any) => {
  const { userName, setUserName } = useAppContext();
  const { s, vs, ms, fs } = useResponsive();
  const styles = createStyles(s, vs, ms, fs);
  return (
    <ScreenWrapper>
    
        <HomeHeader navigation={navigation} />
          <ScrollView showsVerticalScrollIndicator={false}>
        <HomeBanner />
        <Wrapper>
          < HomeCard navigation={navigation} />
        </Wrapper>
      </ScrollView>
    </ScreenWrapper>
  )
}

export default HomeScreen

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
    text: {
      fontSize: fs(14),
      fontFamily: fonts.regular
    }
  });