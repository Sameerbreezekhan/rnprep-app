


import { useWindowDimensions, PixelRatio } from 'react-native';

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const useResponsive = () => {
  const { width, height } = useWindowDimensions();

  const shortSide = Math.min(width, height);
  const longSide = Math.max(width, height);

  const s = (size: number) =>
    (shortSide / guidelineBaseWidth) * size;

  const vs = (size: number) =>
    (longSide / guidelineBaseHeight) * size;

  const ms = (size: number, factor = 0.5) =>
    size + (s(size) - size) * factor;

  const fs = (size: number) =>
    PixelRatio.roundToNearestPixel(ms(size));

  const isTablet = shortSide >= 768;

  return {
    s,
    vs,
    ms,
    fs,
    isTablet,
    width,
    height,
  };
};


// | Style Property             | Use This | Example                     |
// | -------------------------- | -------- | --------------------------- |
// | **fontSize**               | `fs`     | `fontSize: fs(14)`          |
// | **lineHeight**             | `fs`     | `lineHeight: fs(20)`        |
// | **padding**                | `ms`     | `padding: ms(16)`           |
// | **paddingVertical**        | `vs`     | `paddingVertical: vs(12)`   |
// | **paddingHorizontal**      | `ms`     | `paddingHorizontal: ms(16)` |
// | **margin**                 | `ms`     | `margin: ms(16)`            |
// | **marginVertical**         | `vs`     | `marginVertical: vs(12)`    |
// | **marginHorizontal**       | `ms`     | `marginHorizontal: ms(16)`  |
// | **borderRadius**           | `s / ms` | `borderRadius: s(12)`       |
// | **width / height (icons)** | `s`      | `width: s(24)`              |
// | **top / bottom**           | `vs`     | `top: vs(10)`               |
// | **left / right**           | `ms`     | `left: ms(10)`              |

