export type NormalColorType =
  | 'primary'
  | 'success'
  | 'secondary'
  | 'warning'
  | 'error';

export const ButtonColorMap: Record<
  NormalColorType,
  { normal: string; hover: string }
> = {
  primary: {
    normal: '#0072F5',
    hover: '#0b63c8',
  },
  success: {
    normal: '#17C964',
    hover: '#12b759',
  },
  secondary: {
    normal: '#7828C8',
    hover: '#6220a3',
  },
  warning: {
    normal: '#F5A524',
    hover: '#d89220',
  },
  error: {
    normal: '#F31260',
    hover: '#bb2157',
  },
};
