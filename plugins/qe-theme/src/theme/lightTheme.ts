import { createUnifiedTheme, palettes } from '@backstage/theme';
import { createPagesLightTheme } from './pageLightTheme';

/**
 * Definition for the light palette variant
 */
const palette = {
  ...palettes.light,
  navigation: {
    background: '#222427',
    indicator: 'rgb(255,95,21)',
    color: '#ffffff',
    selectedColor: '#ffffff',
    navItem: {
      hoverBackground: '#3c3f42',
    },
    submenu: {
      background: '#222427',
    },
  },
  primary: {
    main: 'rgb(255, 95, 21)',
  },
} as const;

/**
 * Theme instance
 */
export const lightTheme = createUnifiedTheme({
  palette,
  defaultPageTheme: 'home',
  pageTheme: createPagesLightTheme(),
});
