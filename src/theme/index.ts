import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.500",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "brand.500",
  },
};

// extendTheme allows you implement custom themes and colors and fonts for components
const theme = extendTheme(
  {
    colors: {
      brand: {
        0: "#A3C185",
        50: "#f5fee5",
        100: "#e1fbb2",
        200: "#cdf781",
        300: "#b8ee56",
        400: "#a2e032",
        500: "#A3C185",
        600: "#71ab09",
        700: "#578602",
        800: "#3c5e00",
        900: "#203300",
      },
    },
    //   the base fonts serve as a fall back font in case the selected font is not available
    fonts: {
      heading: `var(--font-montserrat), ${base.fonts?.heading}`,
      body: `var(--font-inter), ${base.fonts?.body}`,
    },
    components: {
      // setting new variant for the button component
      Button: {
        variants: {
          primary: (props: any) => ({
            rounded: "none",
            ...brandRing,
            color: mode("white", "gray.800")(props),
            backgroundColor: mode("brand.500", "brand.500")(props),

            _hover: {
              backgroundColor: mode("brand.600", "brand.300")(props),
            },

            _active: {
              backgroundColor: mode("brand.700", "brand.400")(props),
            },
          }),
        },
      },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: "none",
            ...brandRing,
          },
        },
      },
    },
  },
  // theme extensions allow us to set default styles for some components
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
