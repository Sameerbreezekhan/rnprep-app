import React, { useRef, useEffect, useState } from 'react';
import {
  StyleSheet,
  Animated,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import emitter from './emitter';




import { colors } from '../../constant';
import { fonts } from '../../constant/fonts';
import { CrossIcon } from '../../assets/svg/SvgImg';

const WIDTH = Dimensions.get('screen').width;
const height = Dimensions.get("screen").height;
const width = Dimensions.get("window").width;
const Toast = () => {
  const [alert_name, setAlertName] = useState('');
  const [message, setMessage] = useState('');
  const translateX = useRef(new Animated.Value(-WIDTH)).current;
  let autohidetime = 3100;
  let timeout_id: any = null;

  const emitListener = (t_alert_name: any) => {
    if (t_alert_name?.heading && t_alert_name?.message) {
      showAlert(t_alert_name?.heading);
      setMessage(t_alert_name?.message);
    } else {
      showAlert(t_alert_name);
    }
  };

  useEffect(() => {
     
    emitter.addListener('alert', emitListener);
    return () => {
      emitter.removeAllListeners();
    };
  }, []);

  const showAnim = () => {
    Animated.timing(translateX, {
      toValue: 0, // Move to center
      duration: 300,
      useNativeDriver: true,
    }).start();
    timeout_id = setTimeout(() => {
      hideAnim();
      autohidetime = 3100; // Reset if modified
    }, autohidetime);
  };

  const hideAnim = () => {
    Animated.timing(translateX, {
      toValue: WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start(({ finished }) => {
      setAlertName('');
      translateX.setValue(-WIDTH);
    });
    clearTimeout(timeout_id);
  };

  const showAlert = (tname: string) => {
    setAlertName(tname);
    showAnim();
  };

  if (!alert_name) return null;
  if (alert_name == 'success') {
 
    return (
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateX }],
          },
        ]}>
        <View
          style={[
            styles.anim_cont,
            {
              borderLeftColor: '#0db04b',
              borderLeftWidth: 4,
            },
          ]}>
          <View style={{ paddingVertical: 5 }}>
            <Text
              style={{
                fontSize: width * 0.036,
                fontFamily: fonts.regular,
                color: '#0db04b',
              }}>
              Success
            </Text>
            <View style={{ height: height * 0.002 }} />
            <Text
              style={{
                fontSize: width * 0.036,
                fontFamily: fonts.regular,
                color: colors.black,
              }}>
              {message}
            </Text>
          </View>
          <TouchableOpacity
            onPress={hideAnim}
            hitSlop={{ left: 5, right: 5, bottom: 5, top: 5 }}>
            <CrossIcon width={width * 0.04} height={width * 0.04} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }

  if (alert_name == 'error') {
    return (
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateX }],
          },
        ]}>
        <View
          style={[
            styles.anim_cont,
            {
              borderLeftColor: colors.red,
              borderLeftWidth: 4,
            },
          ]}>
          <View style={{ paddingVertical: 5 }}>
            <Text
              style={{
                fontSize: width * 0.036,
                fontFamily: fonts.regular,
                color: colors.red,
              }}>
              Error
            </Text>
            <View style={{ height: height * 0.002 }} />
            <Text
              style={{
                fontSize: width * 0.036,
                fontFamily: fonts.regular,
                color: colors.black,
              }}>
              {message}
            </Text>
          </View>
          <TouchableOpacity
            onPress={hideAnim}
            hitSlop={{ left: 5, right: 5, bottom: 5, top: 5 }}>
            <CrossIcon width={width * 0.04} height={width * 0.04} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }

  if (alert_name == 'info') {
    return (
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateX }],
          },
        ]}>
        <View
          style={[
            styles.anim_cont,
            {
              borderLeftColor: 'blue',
              borderLeftWidth: 4,
            },
          ]}>
          <View style={{ paddingVertical: 5 }}>
            <Text
              style={{
                fontSize: width * 0.036,
                fontFamily: fonts.regular,
                color: 'blue',
              }}>
              Info
            </Text>
            <View style={{ height: height * 0.002 }} />
            <Text
              style={{
                fontSize: width * 0.036,
                fontFamily: fonts.regular,
                color: colors.black,
              }}>
              {message}
            </Text>
          </View>
          <TouchableOpacity
            onPress={hideAnim}
            hitSlop={{ left: 5, right: 5, bottom: 5, top: 5 }}>
            <CrossIcon width={width * 0.04} height={width * 0.04} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }
};

export default Toast;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: "90%",
    paddingHorizontal: width * 0.02,
    top: height * 0.02,
    left: width * 0.05,
  },
  anim_cont: {
    paddingHorizontal: '2%',
    paddingVertical: 5,
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: 'grey',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
});
