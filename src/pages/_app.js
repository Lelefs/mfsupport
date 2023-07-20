import Footer from "@/components/footer/footer";
import "@/styles/globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ Component, ...pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
