import { PageTheme, genPageTheme, shapes } from '@backstage/theme';

/**
 * Create the theme entries for the app pages based on the current palette
 * @param palette
 * @returns
 */
export function createPagesTheme(): Record<string, PageTheme> {
  const light = 'rgb(248, 248, 248)';
  const dark = 'rgb(0, 0, 208)';
  return {
    home: genPageTheme({ colors: [dark, light], shape: shapes.wave }),
    app: genPageTheme({ colors: [dark, light], shape: shapes.wave }),
    apis: genPageTheme({ colors: [dark, light], shape: shapes.wave }),
    documentation: genPageTheme({
      colors: [dark, light],
      shape: shapes.wave,
    }),
    tool: genPageTheme({ colors: [dark, light], shape: shapes.round }),
    other: genPageTheme({ colors: [dark, light], shape: shapes.wave }),
  };
}
