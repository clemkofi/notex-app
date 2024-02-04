import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const fonts = {
  inter,
  montserrat,
};
