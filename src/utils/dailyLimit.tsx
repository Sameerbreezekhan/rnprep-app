import AsyncStorage from '@react-native-async-storage/async-storage';

const MESSAGE_LIMIT = 20;
const STORAGE_KEY = 'DAILY_AI_USAGE';

export const checkDailyLimit = async () => {
  const today = new Date().toISOString().split('T')[0];

  const storedData = await AsyncStorage.getItem(STORAGE_KEY);

  if (!storedData) {
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ date: today, count: 0 })
    );
    return { allowed: true, count: 0 };
  }

  const parsed = JSON.parse(storedData);

  // If new day → reset count
  if (parsed.date !== today) {
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ date: today, count: 0 })
    );
    return { allowed: true, count: 0 };
  }

  if (parsed.count >= MESSAGE_LIMIT) {
    return { allowed: false, count: parsed.count };
  }

  return { allowed: true, count: parsed.count };
};

export const incrementDailyCount = async () => {
  const today = new Date().toISOString().split('T')[0];
  const storedData = await AsyncStorage.getItem(STORAGE_KEY);

  if (!storedData) return;

  const parsed = JSON.parse(storedData);

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      date: today,
      count: parsed.count + 1,
    })
  );
};