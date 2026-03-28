import {
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    View,

} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useResponsive } from '../../utils/dimensions'
import ScreenWrapper from '../../component/global/screen_wrapper'
import Wrapper from '../../component/global/wrapper'
import AppHeader from '../../component/header/app_header'
import { WebView } from 'react-native-webview'
import { PrivacyPolicyUrl } from '../../utils/api'
import { colors } from '../../constant'



const PrivacyPolicyScreen = ({ navigation }: any) => {
    const { s, vs, ms, fs, width } = useResponsive()
    const styles = createStyles(s, vs, ms, fs, width)
    const url = PrivacyPolicyUrl;
    const [loading, setLoading] = useState(true);
    return (
        <ScreenWrapper>
            <AppHeader title={"Privacy Policy"} showBack={true} showSave={false} />
            {loading && (
                <View style={styles.indicatore}>
                    <ActivityIndicator size="large" color={colors.theme} />
                </View>
            )}

            <WebView
                source={{ uri: 'https://sites.google.com/view/rnprep/privacy-policy' }}
                onLoadEnd={() => setLoading(false)}
            />
            {/* <WebView source={{ uri: url }} /> */}
        </ScreenWrapper>
    )
}

export default PrivacyPolicyScreen
const createStyles = (s: any, vs: any, ms: any, fs: any, width: any) =>
    StyleSheet.create({
        container: {


        },
        indicatore: {
            position: 'absolute',
                    top: 0, bottom: 0, left: 0, right: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1
        },
      
    })
