import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#DDB967",
  primaryBright: "#D9A93C",
  primaryDark: "#C39326",
  secondary: "#684c0a",
  success: "#e8c064",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#684c0a",
  background: "#221d23",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#221d23",
  // inputBorder: "#cccccc",
  primaryDark: "#C39326",
  tertiary: "#3c2c09",
  text: "#DDB967",
  textDisabled: "#666171",
  textSubtle: "#DDB967",
  borderColor: "#524B63",
  card: "#deded8",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #4e3a0d 0%, #7E5E17 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#684c0a",
  background: "#221d23",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#221d23",
  // inputBorder: "#cccccc",
  primaryDark: "#C39326",
  tertiary: "#3c2c09",
  text: "#DDB967",
  textDisabled: "#666171",
  textSubtle: "#DDB967",
  borderColor: "#524B63",
  card: "#deded8",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #4e3a0d 0%, #7E5E17 100%)",
  },
};
