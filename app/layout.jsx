import "./globals.css";
import { East_Sea_Dokdo } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const dokdo = East_Sea_Dokdo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dokdo",
});

export const metadata = {
  title: "Todo App",
  description: "Next.js 타임어택",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={dokdo.variable}>
      <body className="min-h-screen text-xl font-[family-name:var(--font-dokdo)]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
