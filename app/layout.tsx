import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
