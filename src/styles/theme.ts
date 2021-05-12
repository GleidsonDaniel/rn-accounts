const colors = {
  purple: '#622490',
  lightGray: '#C4C4D1',
  heather: '#F0EDF5',
  green: '#1BA803',
  orange: '#E28856',
  white: '#FFFFFF',
  gray6: '#6A6A6A',
  gray777: '#777777',
  gray74: '#747474',
  pink: '#FF6680',
};

const fonts = {
  rubik: 'Rubik-Regular',
  roboto: 'Roboto-Regular',
};

export const theme = {
  colors,
  fonts,
};

export type theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends theme {}
}
