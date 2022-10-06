export const customMediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

const mediaQuery = {
  xxlarge: customMediaQuery(1920),
  xlarge: customMediaQuery(1440),
  large: customMediaQuery(1200),
  medium: customMediaQuery(1024),
  small: customMediaQuery(768),
  xsmall: customMediaQuery(375),
  custom: customMediaQuery,
};

export default mediaQuery;