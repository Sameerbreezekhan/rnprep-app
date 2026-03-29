import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    Linking,
    TouchableOpacity,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../../constant'
import { fonts } from '../../constant/fonts'
import { useResponsive } from '../../utils/dimensions'
import { CodeIcon, JSIcon, ReactIcon, ReactWhiteIcon } from '../../assets/svg/SvgImg'
import ScreenWrapper from '../../component/global/screen_wrapper'
import Wrapper from '../../component/global/wrapper'
import AppHeader from '../../component/header/app_header'
import RenderHTML from 'react-native-render-html';
import { portfolioHtml } from '../../constant/questions/Resume'
import { Images } from '../../constant/images'


const AboutUsScreen = ({ navigation }: any) => {
    const { s, vs, ms, fs, width } = useResponsive()
    const styles = createStyles(s, vs, ms, fs, width)


    const [data, setData] = useState<any>()


    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: { display: 'none' },
        });

        return () => {
            navigation.getParent()?.setOptions({
                tabBarStyle: { display: 'flex' },
            });
        };
    }, []);

      const phoneNumber = "+918770523530";
  const handleCall = () => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url).catch((err) =>
      console.error("Error dialing number:", err)
    );
  };

  const handleEmail = async () => {
  const email = 'sameerbreezkhan@gmail.com';
  const url = `mailto:${email}`;

   Linking.openURL(url).catch((err) =>
    console.error("Error opening email:", err)
  );
};

    return (
        <ScreenWrapper>

            <AppHeader title={"About Us"} showBack={true} showSave={false} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Wrapper>
                    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

                        {/* HERO */}
                        <Image source={Images.sameer} style={styles.image} />
                        <View style={styles.card}>
                            <Text style={styles.name}>Sameer Khan</Text>
                            <Text style={styles.role}>React Native Developer</Text>
                              <TouchableOpacity onPress={()=>handleEmail()}>
                            <Text style={styles.info}>sameerbreezkhan@gmail.com</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>handleCall()}>
                            <Text style={styles.phone}>+91 8770523530</Text>
                            </TouchableOpacity>
                        </View>

                        {/* ABOUT */}
                        <View style={styles.card}>
                            <Text style={styles.heading}>About Me</Text>
                            <Text style={styles.text}>
                                Passionate React Native Developer with 2+ years of experience
                                building scalable mobile applications for Android & iOS.
                            </Text>
                        </View>

                        {/* SKILLS */}
                        <View style={styles.card}>
                            <Text style={styles.heading}>Technical Skills</Text>
                            <Text style={styles.text}>
                                React Native, JavaScript, TypeScript, Redux Toolkit,
                                Context API, Firebase, GraphQL, REST APIs, SQLite, Realm, Git
                            </Text>
                        </View>

                        {/* EXPERIENCE */}
                        <View style={styles.card}>
                            <Text style={styles.heading}>Experience</Text>

                            <Text style={styles.subHeading}>
                                React Native Developer — Iemosys Infotech
                            </Text>
                            <Text style={styles.smallText}>Nov 2024 – Nov 2025</Text>
                            <Text style={styles.text}>• Built cross-platform apps (iOS & Android)</Text>
                            <Text style={styles.text}>• Integrated APIs & Firebase</Text>
                            <Text style={styles.text}>• Implemented Push Notifications & Social Login</Text>

                            <Text style={[styles.subHeading, { marginTop: 12 }]}>
                                App Developer — Ample eBusiness
                            </Text>
                            <Text style={styles.smallText}>Jan 2023 – Nov 2024</Text>
                            <Text style={styles.text}>• Built responsive UI</Text>
                            <Text style={styles.text}>• Integrated payment gateways</Text>
                            <Text style={styles.text}>• Handled Play Store deployment</Text>
                        </View>

                        {/* PROJECTS */}
                        <View style={styles.card}>
                            <Text style={styles.heading}>Projects</Text>

                            <Text style={styles.subHeading}>iCue</Text>
                            <Text style={styles.text}>Health-based barcode scanning app.</Text>

                            <Text style={styles.subHeading}>Qamoos53</Text>
                            <Text style={styles.text}>Bilingual dictionary app.</Text>

                            <Text style={styles.subHeading}>Kisaan Helpline</Text>
                            <Text style={styles.text}>Farmer support mobile platform.</Text>

                            <Text style={styles.subHeading}>Agrival</Text>
                            <Text style={styles.text}>Workforce management app.</Text>
                        </View>

                        {/* EDUCATION */}
                        <View style={styles.card}>
                            <Text style={styles.heading}>Education</Text>
                            <Text style={styles.subHeading}>Medicaps University</Text>
                            <Text style={styles.text}>Master of Computer Applications</Text>
                            <Text style={styles.text}>CGPA: 8.9</Text>
                        </View>

                    </ScrollView>
                </Wrapper>
            </ScrollView>
        </ScreenWrapper>
    )
}

export default AboutUsScreen
const createStyles = (s: any, vs: any, ms: any, fs: any, width: any) =>
    StyleSheet.create({
        container: {


        },
        card: {
            backgroundColor: '#000000',
            padding: ms(16),
            borderRadius: ms(12),
            marginBottom: ms(16),
        },
        name: {
            fontSize: ms(26),
            color: '#4da6ff',
            fontWeight: 'bold',
            marginBottom: ms(6),
        },
        role: {
            fontSize: ms(14),
            color: '#00d4ff',
            marginBottom: ms(8),
        },
        info: {
            fontSize: ms(13),
            color: '#cccccc',
        },
         phone: {
            fontSize: ms(13),
            color:"#007BFF",
            marginVertical:vs(4)
        },
        heading: {
            fontSize: 18,
            color: '#00d4ff',
            fontWeight: 'bold',
            marginBottom: ms(10),
        },
        subHeading: {
            fontSize: ms(15),
            color: '#4da6ff',
            fontWeight: '600',
        },
        smallText: {
            fontSize: ms(12),
            color: '#aaaaaa',
            marginBottom: ms(6),
        },
        text: {
            fontSize: ms(13),
            color: '#cccccc',
            marginBottom: ms(4),
        },
        image: {
            height: ms(140),
            width: ms(140),
            alignSelf: 'center',
            borderRadius: ms(100),
            resizeMode: 'cover',
            marginVertical: ms(16),
        }
    })
