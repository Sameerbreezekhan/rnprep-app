import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../../constant'
import { fonts } from '../../constant/fonts'
import { useResponsive } from '../../utils/dimensions'
import { CodeIcon, JSIcon, ReactIcon, ReactWhiteIcon, SaveIcon } from '../../assets/svg/SvgImg'
import ScreenWrapper from '../../component/global/screen_wrapper'
import Wrapper from '../../component/global/wrapper'
import AppHeader from '../../component/header/app_header'
import ListCard from '../../component/home/ListCard'
import { useRoute } from '@react-navigation/native'
// import HTMLView from 'react-native-htmlview';
import RenderHTML from 'react-native-render-html';
import { useDispatch, useSelector } from 'react-redux'
import { addQuestion, removeQuestion } from '../../services/redux/savedSlice'
import { colorConverter, idConverter } from '../../utils/functions'
import emitter from '../../component/Emitter/emitter'
// import tablePlugin from '@native-html/table-plugin';

const AnswerScreen = ({ navigation }: any) => {
    const { s, vs, ms, fs, width } = useResponsive()
    const styles = createStyles(s, vs, ms, fs, width)
    const route = useRoute<any>();
    const [data, setData] = useState<any>();
    const dispatch = useDispatch();

    const savedQuestions: any = useSelector<any>(
        state => state.saved.savedQuestions
    );
    const Id = idConverter(data);
    const questionId = data?.id + Id;

    const isSaved = savedQuestions.some(
        (item: any) => item.id === questionId
    );


    useEffect(() => {
        if (route?.params?.data) {
            setData(route?.params?.data)
        }

    }, [route?.params]);



    const addQuestions = (item: any) => {
        try {
            if (!isSaved) {

                const data =
                {
                    id: item.id + Id,
                    tag: item.tag,
                    question: item.question,
                    answer: item.answer
                }
                dispatch(addQuestion(data));
                // const tost = {
                //     heading: "success",
                //     message: `Question Saved Successfully`
                // };
                // emitter.emit("alert", tost);

            }
            else {

                dispatch(removeQuestion(item.id + Id));
                // const tost = {
                //     heading: "success",
                //     message: `Question Removed Successfully`
                // };
                // emitter.emit("alert", tost);

            }
        }
        catch (error) {
            console.log("error", error)
        }

    }



    return (
        <ScreenWrapper>

            <AppHeader title={route?.params?.data?.tag} showBack={true} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Wrapper>
                    <View style={styles.Container}>
                        <Text style={[styles.text,{color:colorConverter(route?.params?.data)}]}>{data?.id}{". "}{data?.question}</Text>
                        <TouchableOpacity
                            onPress={() => addQuestions(route?.params?.data)}
                        >
                            <SaveIcon height={ms(30)} width={ms(30)} active={isSaved} />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.container}>

                        {/* <HTMLView value={data?.answer} /> */}
                        <RenderHTML
                            contentWidth={width}
                            source={{ html: data?.answer }}
                            baseStyle={{
                                color: '#cccccc',
                                fontFamily: fonts.regular,
                            }}
                            tagsStyles={{
                                h2: {
                                    color: '#ffffff',
                                    marginTop: vs(10),
                                    fontFamily: fonts.bold,
                                },
                                p: {
                                    color: '#cccccc',
                                    fontSize: ms(14),
                                    lineHeight: vs(20),
                                },
                                pre: {
                                    backgroundColor: '#2a2a2a',
                                    padding: 10,
                                    borderRadius: 8,
                                },
                                code: {
                                    color: '#00ffcc',
                                    fontFamily: fonts.regular,
                                },
                                hr: {
                                    borderBottomWidth: 1,
                                    borderColor: '#444',
                                    marginVertical: 10,
                                },
                            }}

                        />
                    </View>
                </Wrapper>
            </ScrollView>
        </ScreenWrapper>
    )
}

export default AnswerScreen
const createStyles = (s: any, vs: any, ms: any, fs: any, width: any) =>
    StyleSheet.create({
        Container: {
            flex: 1,
            backgroundColor: colors.q_bkg,
            padding: ms(10),
            marginTop: vs(10),
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: 'space-between'
        },
        container: {
            flex: 1,
            backgroundColor: colors.a_bkg,
            padding: ms(10),
        },

        text: {
            fontFamily: fonts.medium,
            fontSize: fs(16),
            color: colors.q_txt,
            textAlign: 'center',
            width: '90%',
        },
        icon: {
            position: 'absolute',
            right: ms(10),
            top: ms(5)
        }

    })
