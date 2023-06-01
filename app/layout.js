import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", weight: ["400", "500", "700"], variable: "--font-dm-sans" });

export const metadata = {
  title: "Frontend Mentor - Expenses chart component solution",
  description: "Frontend Mentor - Expenses chart component solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-dm-sans">{children}</body>
    </html>
  );
}
