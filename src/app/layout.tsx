import { Metadata } from "next";
import Header from "@/components/header";
import "@/styles/global.css";
import { kanit } from "@/styles/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Best Seller Explorer",
    default: "The New York Times Best Seller Explorer",
  },
  description: "Build an explorer for The New York Times Best Seller list",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
