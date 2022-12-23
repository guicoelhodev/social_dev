import { darkTheme } from '@style/theme';
import 'styled-components';

type ThemeType = typeof darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
