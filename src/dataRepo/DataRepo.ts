import { AsyncStorage } from "react-native";

const DataKeys = {
  LOCALIZATION: "LOCALIZATION",
  ACCESS_TOKEN: "ACCESS_TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
  TOKEN_TYPE: "TOKEN_TYPE",
  TOKEN_EXPIRY_TIME: "TOKEN_EXPIRY_TIME",
  USER_DETAILS: "USER_DETAILS",
  FIRST_TIME_OPEN: "FIRST_TIME_OPEN",
  EXPO_PUSH_TOKEN: "EXPO_PUSH_TOKEN"
};

const storeData = async (key, payload) => {
  try {
    await AsyncStorage.setItem(key, payload);
  } catch (error) {
    // Error saving data
    if (__DEV__) console.error(error);
  }
};

const retrieveData = async (key, defaultValue = null) => {
  try {
    const value = await AsyncStorage.getItem(key);
    // console.log(key, value);
    if (value !== null) {
      return value;
    } else {
      await AsyncStorage.setItem(key, defaultValue);
      return await AsyncStorage.getItem(key);
    }
  } catch (error) {
    // Error retrieving data
    if (__DEV__) console.error(error);
  }
  return null;
};

const clearData = async key => {
  return AsyncStorage.removeItem(key);
};

const clearStoredData = async () => {
  return AsyncStorage.clear();
};

const isFirstTimeOpen = async () => {
  return retrieveData(DataKeys.FIRST_TIME_OPEN);
};

const markFirstTimeOpen = async value => {
  return storeData(DataKeys.FIRST_TIME_OPEN, value);
};

const getExpoPushToken = async () => {
  return retrieveData(DataKeys.EXPO_PUSH_TOKEN);
};

const saveExpoPushToken = async value => {
  return storeData(DataKeys.EXPO_PUSH_TOKEN, value);
};

const clearExpoPushToken = async () => {
  return clearData(DataKeys.EXPO_PUSH_TOKEN);
};

export {
  DataKeys,
  storeData,
  retrieveData,
  clearData,
  clearStoredData,
  isFirstTimeOpen,
  markFirstTimeOpen,
  getExpoPushToken,
  saveExpoPushToken,
  clearExpoPushToken
};
