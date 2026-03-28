import React, { useState, useRef } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { getApp } from '@react-native-firebase/app';
import { getAI, getGenerativeModel } from '@react-native-firebase/ai';
import ScreenWrapper from '../../component/global/screen_wrapper';
import Wrapper from '../../component/global/wrapper';
import AppHeader from '../../component/header/app_header';
import { useResponsive } from '../../utils/dimensions';
import { colors } from '../../constant';
import { fonts } from '../../constant/fonts';
import { SendIcon } from '../../assets/svg/SvgImg';
import TypingIndicator from '../../component/global/typing_loading';
import ListEmptyComponent from '../../component/global/empty_list';
import { checkDailyLimit, incrementDailyCount } from '../../utils/dailyLimit';
import emitter from '../../component/Emitter/emitter';
import Markdown from 'react-native-markdown-display';

const ChatScreen = ({ navigation }: any) => {

  const { s, vs, ms, fs, width } = useResponsive()
  const styles = createStyles(s, vs, ms, fs, width)

  const [messages, setMessages] = useState<any>([

    // { role: 'ai', text: 'Hello! I am your AI assistant. How can I help you today?' ,loading:true}

  ]);

  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const chatRef = useRef<any>(null);

  // const sendMessage = async () => {
  //   if (!input) return;

  //   const userMessage = { role: 'user', text: input };
  //   setMessages((prev: any) => [...prev, userMessage]);

  //   try {
  //     const app = getApp();
  //     const ai = getAI(app);
  //     const model = getGenerativeModel(ai, {
  //       model: 'gemini-3-flash-preview',
  //     });

  //     if (!chatRef.current) {
  //       chatRef.current = model.startChat();
  //     }

  //     const result = await chatRef.current.sendMessage(input);
  //     const aiText = result.response.text();

  //     const aiMessage = { role: 'ai', text: aiText };

  //     console.log('AI Response:', aiText);

  //     setMessages((prev: any) => [...prev, aiMessage]);
  //     setInput('');

  //   } catch (error) {
  //     console.log('AI Error:', error);
  //   }
  // };

  // const sendMessage = async () => {
  //   if (!input.trim() || loading) return;

  //   const userMessage = { role: 'user', text: input };
  //   const tempAiMessage = { role: 'ai', text: 'Typing...', loading: true };

  //   setMessages((prev: any) => [...prev, userMessage, tempAiMessage]);
  //   setInput('');
  //   setLoading(true); // 🔥 Start loading

  //   try {
  //     const app = getApp();
  //     const ai = getAI(app);
  //     const model = getGenerativeModel(ai, {
  //       model: 'gemini-3-flash-preview',
  //     });

  //     if (!chatRef.current) {
  //       chatRef.current = model.startChat();
  //     }

  //     const result = await chatRef.current.sendMessage(input);
  //     const aiText = result.response.text();

  //     setMessages((prev: any) => {
  //       const updated = [...prev];
  //       updated[updated.length - 1] = {
  //         role: 'ai',
  //         text: aiText,
  //       };
  //       return updated;
  //     });

  //   } catch (error) {
  //     console.log('AI Error:', error);

  //     setMessages((prev: any) => {
  //       const updated = [...prev];
  //       updated[updated.length - 1] = {
  //         role: 'ai',
  //         text: 'Something went wrong 😔',
  //       };
  //       return updated;
  //     });

  //   } finally {
  //     setLoading(false); // 🔥 Stop loading
  //   }
  // };




  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    // 🔥 CHECK LIMIT FIRST
    const { allowed, count } = await checkDailyLimit();

    if (!allowed) {
      // setMessages((prev: any) => [
      //   ...prev,
      //   {
      //     role: 'ai',
      //     text: 'You reached your 20 messages limit for today. Try again tomorrow 😊',
      //   },
      // ]);
      const tost = {
        heading: "success",
        message: `You reached your 20 messages limit for today. Try again tomorrow`
      };
      emitter.emit("alert", tost);
      return;
    }

    const userMessage = { role: 'user', text: input };
    const tempAiMessage = { role: 'ai', text: 'Typing...', loading: true };

    setMessages((prev: any) => [...prev, userMessage, tempAiMessage]);
    setInput('');
    setLoading(true);

    try {
      const app = getApp();
      const ai = getAI(app);
      const model = getGenerativeModel(ai, {
        model: 'gemini-3-flash-preview',
      });

      if (!chatRef.current) {
        chatRef.current = model.startChat();
      }

      const result = await chatRef.current.sendMessage(input);
      const aiText = result.response.text();
      console.log('AI Response:', aiText);

      // 🔥 INCREMENT AFTER SUCCESS
      await incrementDailyCount();

      setMessages((prev: any) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: 'ai',
          text: aiText,
        };
        return updated;
      });

    } catch (error) {
      console.log('AI Error:', error);

      setMessages((prev: any) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: 'ai',
          text: 'Something went wrong 😔',
        };
        return updated;
      });

    } finally {
      setLoading(false);
    }
  };


  return (

    <ScreenWrapper>
      <AppHeader title={"Chat"} showBack={true} showSave={false} />

      <Wrapper>

        <FlatList
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: vs(80) }}
          ListEmptyComponent={<ListEmptyComponent titel={"No Messages Yet"} />}
          renderItem={({ item }) => (
            <View style={item.role === 'user' ? styles.right : styles.left}>

              {item.loading ? (
                <TypingIndicator />
              ) : (
                // <Text style={styles.text}>{item.text}</Text>
                <View>

                  <Markdown
                    style={{
                      body: {
                        color: '#000',
                        fontSize: ms(14),
                      },
                      heading3: {
                        fontSize: ms(14),
                        fontWeight: 'bold',
                        marginVertical: ms(6),
                      },
                      bullet_list: {
                        marginLeft: ms(10),
                      },
                      strong: {
                        fontWeight: 'bold',
                      },
                    }}
                  >
                    {item.text || ''}
                  </Markdown>
                </View>
              )}
            </View>
          )}
        />



        <View style={styles.input_view}>
          <TextInput
            placeholder="Enter message"
            value={input}
            style={styles.input}
            placeholderTextColor={colors.placeholder}
            onChangeText={setInput}
            editable={!loading}
          />
          <TouchableOpacity
            disabled={loading}
            onPress={() => sendMessage()}>
            <SendIcon height={ms(40)} width={ms(40)} />
          </TouchableOpacity>

        </View>
      </Wrapper>

    </ScreenWrapper>
  );
}

export default ChatScreen;


const createStyles = (s: any, vs: any, ms: any, fs: any, width: any) =>
  StyleSheet.create({
    input: {
      flex: 1,
      color: colors.white,
      fontFamily: fonts.regular,
      fontSize: fs(14),

    },
    input_view: {
      bottom: vs(8),
      position: 'absolute',
      alignSelf: 'center',
      borderWidth: ms(0.5),
      borderRadius: ms(10),
      paddingHorizontal: ms(10),
      paddingVertical: ms(6),
      // marginTop: vs(20),
      backgroundColor: colors.border,
      flexDirection: 'row',
    },
    right: {
      alignSelf: 'flex-end',
      backgroundColor: "#DCF8C6",
      paddingHorizontal: ms(12),
      paddingVertical: ms(8),
      borderTopRightRadius: ms(12),
      borderTopLeftRadius: ms(12),
      borderBottomLeftRadius: ms(12),
      marginVertical: ms(8),
    },
    left: {

      alignSelf: 'flex-start',
      backgroundColor: "#F0F0F0",
      paddingHorizontal: ms(12),
      paddingVertical: ms(8),
      padding: ms(6),
      marginVertical: ms(8),
      borderTopRightRadius: ms(12),
      borderTopLeftRadius: ms(12),
      borderBottomRightRadius: ms(12),
    },
    text: {
      color: colors.black,
      fontFamily: fonts.regular,
      fontSize: fs(14),
    },
    background: {
      position: 'absolute',
      opacity: 0.08, // adjust as needed
    },
  })