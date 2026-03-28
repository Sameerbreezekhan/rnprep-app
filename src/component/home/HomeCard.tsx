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
import { ChatBotIcon, CodeHomeIcon, CodeIcon, JSHomeIcon, JSIcon, JSWIcon, ReactHomeIcon, ReactIcon, ReactWhiteIcon, TSIcon } from '../../assets/svg/SvgImg'
import { strings } from '../../constant/strings'



const HomeCard = ({ navigation }: any) => {
    const { s, vs, ms, fs, width } = useResponsive()
    const styles = createStyles(ms, vs, fs, width)




    const data = [
        { id: 1, tag: 'React Native', icon: <ReactHomeIcon height={ms(100)} width={ms(100)} /> },
        { id: 2, tag: 'JavaScript', icon: <JSHomeIcon height={ms(100)} width={ms(100)} /> },
        { id: 3, tag: 'Coding', icon: <CodeHomeIcon height={ms(100)} width={ms(100)} /> },
        { id: 4, tag: 'TypeScript', icon: <TSIcon height={ms(100)} width={ms(100)} /> },
    ]

    const onPress = (item: any) => {
        console.log("chloo", item?.id)
        if (item) {
            navigation.navigate(strings.JAVASCRIPT, { data: item });
        }
    }

    const RenderItem = ({ item }: any) => {
        return (
            <TouchableOpacity
                style={styles.card}
                onPress={() => onPress(item)}
            >
                {item?.icon}
                <Text
                    style={[
                        styles.text,

                    ]}
                >
                    {item.tag}
                </Text>
            </TouchableOpacity>
        );
    };


    return (
        <>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                // contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <RenderItem item={item} />}
            />
        </>
    )
}

export default HomeCard
const createStyles = (ms: any, vs: any, fs: any, width: any) =>
    StyleSheet.create({
        card: {
            width: width * 0.4,
            marginTop: vs(30),
            alignItems: 'center',
            padding: ms(20),

            gap: ms(20),
            borderRadius: ms(12),
            borderColor: "rgba(255,255,255,0.08)",
            borderWidth: ms(0.5),
            backgroundColor: colors.black


        },
        text: {
            fontFamily: fonts.medium,
            fontSize: fs(16),
            color: colors.white,
        },
    })
