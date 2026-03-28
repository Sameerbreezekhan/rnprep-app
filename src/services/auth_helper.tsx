import AsyncStorage from "@react-native-async-storage/async-storage";

export const setFcmTokenAsync = async (data: any) => {
  try {
    return await AsyncStorage.setItem('FCMTOKEN', data);
  } catch (error) {
    console.log(error);
  }
};

export const getFcmTokenAsync = async () => {
  try {
    const value = await AsyncStorage.getItem('FCMTOKEN');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUserNameAsync = async (data: any) => {
  try {
    return await AsyncStorage.setItem('USERNAME', data);
  } catch (error) {
    console.log(error);
  }
};

export const getUserNameAsync  = async () => {
  try {
    const value = await AsyncStorage.getItem('USERNAME');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUrlAsync = async (data: any) => {
  try {
    return await AsyncStorage.setItem('URL', data);
  } catch (error) {
    console.log(error);
  }
};

export const getUrlAsync = async () => {
  try {
    const value = await AsyncStorage.getItem('URL');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
};

// ........................................................................

export const clearAsync = async () => {
  try {
    await AsyncStorage.removeItem('USERNAME');
    console.log('Username cleared successfully');
  } catch (error) {
    console.log(error);
  }
};