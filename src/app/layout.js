import { Plus_Jakarta_Sans } from "next/font/google";
import LayoutProvider from "./components/LayoutProvider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-primary",
});

// 👉 metadata untuk title & description
export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  keyword: process.env.NEXT_PUBLIC_APP_KEYWORD,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={plusJakarta.variable}>
      <body>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
