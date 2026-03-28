import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useResponsive } from '../../utils/dimensions';
import { BackArrowIcon, SaveIcon } from '../../assets/svg/SvgImg';
import { fonts } from '../../constant/fonts';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../constant';




interface Props {
  title?: string;
  showBack?: boolean;
  showSave?: boolean;
  navigation?: any;
}

const AppHeader: React.FC<Props> = ({ title = '', showBack = true, showSave = true, navigation: any }) => {
  const navigation = useNavigation<any>();
  const { s, vs, ms, fs, width } = useResponsive()
  const styles = createStyles(ms, vs, fs, width)
  const dispatch = useDispatch();
  const savedQuestions: any = useSelector<any>(
    state => state.saved.savedQuestions
  );
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View>
        {showBack && (
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <BackArrowIcon width={ms(20)} height={ms(20)} />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>

      {showSave ? (
        <TouchableOpacity onPress={() => navigation.navigate("SavedScreen")}>
          <SaveIcon height={ms(30)} width={ms(30)} active={false} />
          {savedQuestions.length > 0 &&
            <Text style={styles.text_count}>{savedQuestions.length}</Text>
          }
        </TouchableOpacity>
      ) : <View>
      </View>}
    </View>
  );
};

export default AppHeader;

const createStyles = (ms: any, vs: any, fs: any, width: any) =>
  StyleSheet.create({
    container: {
      height: vs(50),
      paddingHorizontal: ms(16),
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      elevation: 4,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
      justifyContent: 'space-between'

    },
    backButton: {
      zIndex: 1
    },
    title: {
      fontSize: fs(18),
      fontFamily: fonts.bold,
      color: '#111',
    },
    text_count: {
      fontFamily: fonts.bold,
      fontSize: fs(8),
      color: colors.white,
      position: 'absolute',
      alignSelf: 'flex-end',

      top: vs(0),
      backgroundColor: colors.red,
      borderRadius: ms(8),
      paddingHorizontal: ms(4),
      paddingVertical: ms(2),
      minWidth: ms(16),
      textAlign: 'center',


    },
  });
