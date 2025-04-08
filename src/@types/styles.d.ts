import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type Theme = typeof defaultTheme;

declare module 'styled-components' {
  export type DefaultTheme = Theme;
}