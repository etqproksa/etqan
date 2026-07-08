export const revalidate = 300;
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import BootstrapClient from "./components/BootstrapClient";
import Header from "./components/Header";
import Footer from "./components/Footer";
export const metadata = {
  title: "Etqan Projects | Technology You Trust ",
  description: "Technology You Trust",
};

// Google Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
async function getGlobalSettings() {
  try {
    const res = await fetch(`${process.env.STRAPI_URL}/api/global-setting`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_JWT}`,
      },
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data?.data?.Global || [];
  } catch {
    return null;
  }
}

export default async function RootLayout({ children }) {
  const globalData = (await getGlobalSettings()) || [];

  const headerData = globalData.find((item) => item.__component === "layout.header");
  const menu = globalData.find((item) => item.__component === "layout.menu");
  const footerData = globalData.find((item) => item.__component === "layout.footer");

  return (
    <html lang="en" data-bs-theme="dark" className={poppins.variable}>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Orbitron:wght@700;900&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Orbitron:wght@700;900&display=swap"
        />
        
        {/* Main Critical Styles */}
        <link rel="stylesheet" href="/assets/css/globals.css" />
        <link rel="stylesheet" href="/assets/css/theme.min.css" />
        
        {/* Vendor Styles */}
        <link
          rel="stylesheet"
          href="/assets/vendor/boxicons/css/boxicons.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/swiper/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/lightgallery/css/lightgallery-bundle.min.css"
        />
        
        {/* Noscript fallback */}
        <noscript>
          <link rel="stylesheet" href="/assets/vendor/boxicons/css/boxicons.min.css" />
          <link rel="stylesheet" href="/assets/vendor/swiper/swiper-bundle.min.css" />
          <link rel="stylesheet" href="/assets/vendor/lightgallery/css/lightgallery-bundle.min.css" />
        </noscript>
      </head>

      <body className={poppins.variable}>
        <main className="page-wrapper">
          <Header headerdata={headerData} menu={menu}  />
          {children}
         
        </main>
       <Footer footerData={footerData} />
        {/* Back to top button */}
        <a href="#top" className="btn-scroll-top" data-scroll>
          <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
          <i className="btn-scroll-top-icon bx bx-chevron-up"></i>
        </a>

        {/* Bootstrap Client Loader */}
        <BootstrapClient />
        <SpeedInsights />
      </body>
    </html>
  );
}
