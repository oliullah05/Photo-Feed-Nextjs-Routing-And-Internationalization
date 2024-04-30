import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Photo Feed",
  description: "A photo feed app build with nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <Navbar></Navbar>
       <div className="container my-4 lg:my-8">
       {children}
       </div>

  <div id="modal-root-content"></div>
        </body>
    </html>
  );
}
