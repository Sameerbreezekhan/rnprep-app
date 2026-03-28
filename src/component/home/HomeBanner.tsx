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



const HomeBanner = () => {
    const { s, vs, ms, fs, width } = useResponsive()
    const styles = createStyles(ms,vs, fs, width)

    const scrollRef = useRef<ScrollView>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const data = [
        { id: 1, tag: 'Learn React Native. Build the future.', background: colors.theme, icon: <ReactWhiteIcon height={ms(50)} width={ms(50)} /> },
        { id: 2, tag: 'Master JavaScript, master possibilities.', background: colors.yellow, icon: <JSIcon height={ms(50)} width={ms(50)} /> },
        { id: 3, tag: 'Code. Debug. Repeat.', background: colors.node, icon: <CodeIcon height={ms(50)} width={ms(50)} /> },
    ]

    // 🔁 Auto Swipe Logic
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % data.length
            scrollRef.current?.scrollTo({
                x: nextIndex * width,
                animated: true,
            })
            setCurrentIndex(nextIndex)
        }, 3000) // swipe every 3 sec

        return () => clearInterval(interval)
    }, [currentIndex])

    return (
        <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            style={{ marginTop: ms(4) }}
        >
            {data.map((item) => (
                <View
                    key={item.id}
                    style={[
                        styles.card,
                        { backgroundColor: item.background },
                    ]}
                >
                    {item?.icon}
                    <Text style={[styles.text, { color: item?.id == 2 ? "#000000" : "#ffffff" }]}>{item.tag}</Text>
                </View>
            ))}
        </ScrollView>
    )
}

export default HomeBanner
const createStyles = (ms: any,vs:any, fs: any, width: any) =>
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
            elevation: 3,marginTop: vs(10)


        },
        text: {
            fontFamily: fonts.medium,
            fontSize: fs(16),
            color: colors.white,
        },
    })
