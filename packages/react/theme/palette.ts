export const palette = {
  white: '#ffffff',
  gray: '#dfe6e9',
  black: '#000000',
  primary: '#0072F5',
  secondary: '#7828C8',
  success: '#17C964',
  warning: '#F5A524',
  error: '#F31260',
} as const;

export type NormalColorType =
  | 'primary'
  | 'success'
  | 'secondary'
  | 'warning'
  | 'error';

export const ButtonColorMap: Record<
  NormalColorType,
  { normal: string; hover: string; bg: string; hoverSolid: string }
> = {
  primary: {
    bg: '#10253E',
    hover: '#0b63c8',
    normal: '#0072F5',
    hoverSolid: '#3694FF',
  },
  success: {
    bg: '#042F14',
    hover: '#12b759',
    normal: '#17C964',
    hoverSolid: '#41EC8B',
  },
  secondary: {
    bg: '#1F0A33',
    hover: '#6220a3',
    normal: '#7828C8',
    hoverSolid: '#9750DD',
  },
  warning: {
    bg: '#3A2503',
    hover: '#d89220',
    normal: '#F5A524',
    hoverSolid: '#F6AD37',
  },
  error: {
    bg: '#300313',
    hover: '#bb2157',
    normal: '#F31260',
    hoverSolid: '#F4256D',
  },
};
