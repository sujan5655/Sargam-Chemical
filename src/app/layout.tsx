import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
export const metadata = {
  title: "Sargam Chemical",
  icons: {
    icon: "/images/favicon.ico",
  },
  description: "High-quality chemical solutions",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
