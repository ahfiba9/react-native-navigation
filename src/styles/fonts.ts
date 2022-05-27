const size = {
  label: 12,
  heading: 24,
  subheading: 18,
};

const weight = {
  normal: '400',
  semibold: '500',
  bold: '700',
};

export default {
  size,
  weight,

  navBar: {
    fontSize: 16,
    fontWeight: weight.bold,
  },
  heading: {
    fontSize: size.heading,
    fontWeight: weight.bold,
  },
  subheading: {
    fontSize: size.subheading,
    fontWeight: weight.semibold,
  },
};
