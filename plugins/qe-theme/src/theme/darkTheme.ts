import { createUnifiedTheme, palettes } from '@backstage/theme';
import { createPagesTheme } from './pageTheme';

/**
 * Definition for the dark palette variant
 */
const palette = {
  ...palettes.dark,
  navigation: {
    background: '#222427',
    indicator: 'rgb(244, 238, 169)',
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
    main: '#ab75cf',
  },
} as const;

/**
 * Theme instance
 */
export const darkTheme = createUnifiedTheme({
  palette,
  defaultPageTheme: 'home',
  pageTheme: createPagesTheme(),
});
