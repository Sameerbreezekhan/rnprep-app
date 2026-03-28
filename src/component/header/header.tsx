import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { BackArrowIcon, BackBirdIcon } from '../../assets/svg/SvgImg';



interface Props {
  title?: string;
  showBack?: boolean;
}

const CustomHeader: React.FC<Props> = ({ title = 'Back', showBack = true }) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {showBack && (
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        {/* <BackBirdIcon width={width*0.08} height={height*0.08} /> */}
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },
});
