import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-primary",
});

// 👉 metadata untuk title & description
export const metadata = {
  title: "SISMIOP V2.0",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={plusJakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
