import { colors } from "../constant";

export const idConverter = (item: any) => {
  const tagMap: Record<string, number> = {
    ReactNative: 0.1,
    JavaScript: 0.2,
    Coding: 0.3,
    TypeScript: 0.4,
  };

  return tagMap[item?.tag] ?? 0; // default 0 if tag not found
};


export const colorConverter = (item: any) => {
  const tagMap: Record<string, any> = {
    ReactNative: colors.theme,
    JavaScript: colors.yellow,
    Coding: colors.white,
     TypeScript: colors.type_script,
  };

  return tagMap[item?.tag] ?? colors.white; // default 0 if tag not found
};