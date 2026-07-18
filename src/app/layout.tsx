
import "./globals.css";
import { Manrope, Vazirmatn } from 'next/font/google'


const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-vazirmatn'
})

const manrope = Manrope({
  subsets:["latin"],
  weight:['400', '500', '600', '700'],
  variable: '--font-manrope'
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa" dir="rtl"
    >
      <body className={`${vazirmatn.variable} font-vazir ${manrope.variable} font-manrope`}>{children}</body>
    </html>
  );
}
