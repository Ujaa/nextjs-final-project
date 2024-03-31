import { Kanit } from "next/font/google";
import localFont from "next/font/local";

export const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const yarndings = localFont({
  src: "../../public/fonts/Yarndings12-Regular.ttf",
});
