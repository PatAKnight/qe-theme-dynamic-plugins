import { PageTheme, genPageTheme, shapes } from '@backstage/theme';

/**
 * Create the theme entries for the app pages based on the current palette
 * @param palette
 * @returns
 */
export function createPagesLightTheme(): Record<string, PageTheme> {
  const gradientLeft = 'rgb(248, 248, 248)';
  const gradientRight = 'rgb(248, 248, 248)';
  return {
    home: genPageTheme({
      colors: [gradientRight, gradientLeft],
      shape: shapes.wave,
    }),
    app: genPageTheme({
      colors: [gradientRight, gradientLeft],
      shape: shapes.wave,
    }),
    apis: genPageTheme({
      colors: [gradientRight, gradientLeft],
      shape: shapes.wave,
    }),
    documentation: genPageTheme({
      colors: [gradientRight, gradientLeft],
      shape: shapes.wave,
    }),
    tool: genPageTheme({
      colors: [gradientRight, gradientLeft],
      shape: shapes.round,
    }),
    other: genPageTheme({
      colors: [gradientRight, gradientLeft],
      shape: 'none',
    }),
  };
}
