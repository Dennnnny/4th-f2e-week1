const size = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1440px",
  large_laptop: "1920px",
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  large_laptop: `(min-width: ${size.large_laptop})`,
};
