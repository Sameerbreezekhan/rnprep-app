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
import { BackArrowIcon, ChatBotIcon, CodeHomeIcon, CodeIcon, ForwardArrowIcon, JSHomeIcon, JSIcon, JSWIcon, ReactHomeIcon, ReactIcon, ReactWhiteIcon } from '../../assets/svg/SvgImg'
import { strings } from '../../constant/strings'



const ListCard = ({ navigation, data }: any) => {
    const { s, vs, ms, fs, width } = useResponsive()
    const styles = createStyles(s, ms, vs, fs, width)






    const onPress = (data: any) => {
        if (data) {
            navigation.navigate(strings.ANSWERSCREEN, { data: data });
        }
    }

    const RenderItem = ({ item }: any) => {
        return (
            <TouchableOpacity
                style={styles.card}
                onPress={() => onPress(item)}
            >
                <View style={styles.count}>
                    <Text style={[styles.Text,]}  >  {item.id}{"."}</Text>
                    <Text style={[styles.text,]} numberOfLines={1} > {item.question}</Text>
                </View>
                <ForwardArrowIcon />

            </TouchableOpacity>
        );
    };


    return (
        <>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <RenderItem item={item} />}
            />
        </>
    )
}

export default ListCard
const createStyles = (s: any, ms: any, vs: any, fs: any, width: any) =>
    StyleSheet.create({
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
        count: {
            flexDirection: 'row',
            gap:ms(6),
            alignItems:'center'

        }
    })
