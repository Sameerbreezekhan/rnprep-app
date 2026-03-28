import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../../constant'
import { fonts } from '../../constant/fonts'
import { useResponsive } from '../../utils/dimensions'
import { BackArrowIcon, ChatBotIcon, CodeHomeIcon, CodeIcon, DeleteIcon, ForwardArrowIcon, JSHomeIcon, JSIcon, JSWIcon, ReactHomeIcon, ReactIcon, ReactWhiteIcon } from '../../assets/svg/SvgImg'
import { strings } from '../../constant/strings'
import { colorConverter, idConverter } from '../../utils/functions'
import { clearAllQuestions, removeQuestion } from '../../services/redux/savedSlice'
import { useDispatch } from 'react-redux'
import emitter from '../Emitter/emitter'
import ModalAlert from '../modal/modal_alert'
import ListEmptyComponent from '../global/empty_list'



const SaveCard = ({ navigation, data }: any) => {
    const { s, vs, ms, fs, width } = useResponsive()
    const styles = createStyles(s, ms, vs, fs, width)
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);

    const onPress = (data: any) => {
        let Id = idConverter(data);
      
        if (data) {
            navigation.navigate(strings.ANSWERSCREEN, {
                data: {
                    id: Math.ceil(data.id - Id),
                    tag: data.tag,
                    question: data.question,
                    answer: data.answer
                }
            });
        }
    }

    const onDelete = (item: any) => {
        if (item) {
            const Id = idConverter(item);
            dispatch(removeQuestion(item.id));
            setModalVisible(false);
            // const tost = {
            //     heading: "success",
            //     message: `Question Removed Successfully`
            // };
            // emitter.emit("alert", tost);
        }
    }


    const onClearAll = () => {
        dispatch(clearAllQuestions());
        setModalVisible(false);
        const tost = {
            heading: "success",
            message: `All Question Removed Successfully`
        };
        emitter.emit("alert", tost);
    }

    const RenderItem = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                style={styles.card}
                onPress={() => onPress(item)}
            >
                <View style={styles.count}>
                    <Text style={[styles.Text,]}  >  {index}{"."}</Text>
                    <Text style={[styles.text, { color: colorConverter(item) }]} numberOfLines={1} > {item.question}</Text>
                   
                </View>
                <TouchableOpacity style={styles.icon} onPress={() => onDelete(item)}>
                    <DeleteIcon height={ms(26)} width={ms(26)} />
                </TouchableOpacity>


            </TouchableOpacity>
        );
    };


    return (
        <View style={styles.container}>
            {data.length > 9 &&
                <TouchableOpacity style={styles.clearButton} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={[styles.text_clear,]}  > {"Clear All"}</Text>

                </TouchableOpacity>
            }

            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => <RenderItem item={item} index={index + 1} />}
                ListEmptyComponent={<ListEmptyComponent titel={"No Saved Questions"} />}
            />
            <ModalAlert
                visible={modalVisible}
                heading={strings.CLEAR_ALL}
                titel={strings.CLEAR_ALL_MESSAGE}
                onSuccess={() => onClearAll()}
                onClose={() => setModalVisible(!modalVisible)}

            />
        </View>
    )
}

export default SaveCard
const createStyles = (s: any, ms: any, vs: any, fs: any, width: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            // paddingBottom: vs(42),

        },
        card: {
            flex: 1,
            marginTop: vs(8),
            alignItems: 'center',
            paddingVertical: ms(20),
            paddingHorizontal: ms(5),
            flexDirection: "row",
            justifyContent: 'space-between',
            borderRadius: ms(12),
            borderColor: "rgba(255,255,255,0.08)",
            borderWidth: ms(0.5),
            backgroundColor: colors.black


        },
        Text: {
            fontFamily: fonts.medium,
            fontSize: fs(16),
            color: colors.white,

        },
        text: {
            fontFamily: fonts.regular,
            fontSize: fs(14),
            color: colors.white,
            width: width * 0.74

        },
        text_clear: {
            fontFamily: fonts.regular,
            fontSize: fs(12),
            color: colors.white,


        },
        count: {
            flexDirection: 'row',
            gap: ms(6),
            alignItems: 'center'

        },
        icon: {
            zIndex: 1
        },
        clearButton: {
            alignSelf: 'flex-end',
            paddingVertical: ms(4),
            paddingHorizontal: ms(12),
            backfaceVisibility: 'hidden',
            borderRadius: ms(4),
            backgroundColor: colors.red,
            marginTop: vs(10),
            position: 'absolute',
            right: ms(10),
            bottom: ms(20),
            zIndex: 1

        }
    })
