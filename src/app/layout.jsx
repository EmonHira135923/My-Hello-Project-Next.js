import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/Componets/Shared/Header";
import Footer from "@/Componets/Shared/Footer";
import CartProvider from "@/context/CartProvider";
// Font Setup
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "My Hello Project",
    template: "%s | My Hello Project"
  },
  description: "A food delivery app built with Next.js, showcasing a variety of delicious meals and a seamless shopping experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <CartProvider>
          <Header />
          {children}
          <footer>
            <Footer />
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
