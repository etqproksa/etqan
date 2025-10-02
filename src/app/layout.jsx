
import { Poppins } from "next/font/google";
import Preloader from "./components/Preloader";
import BootstrapClient from "./components/BootstrapClient";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      next: { revalidate: 30 }, // ISR → static + refresh every 60s
    });

    if (!res.ok) {
      console.error("❌ Failed to fetch Global Settings from Strapi");
      return null;
    }

    const data = await res.json();
    return data?.data?.Global || [];
  } catch (error) {
    console.error("❌ Error fetching Global Settings:", error);
    return null;
  }
}

export default async function RootLayout({ children }) {
   const globalData = await getGlobalSettings();


  // Example extracting data (adjust depending on your Strapi structure)
  const headerData = globalData.find((item) => item.__component === "layout.header");
  const menu = globalData.find((item) => item.__component === "layout.menu");
 
  const footerData = globalData.find((item) => item.__component === "layout.footer");

  return (
    <html lang="en" data-bs-theme="dark" className={poppins.variable}>
      <head>
        {/* Vendor Styles */}
        <link
          rel="stylesheet"
          media="screen"
          href="/assets/vendor/boxicons/css/boxicons.min.css"
        />
        <link
          rel="stylesheet"
          media="screen"
          href="/assets/vendor/swiper/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          media="screen"
          href="/assets/vendor/lightgallery/css/lightgallery-bundle.min.css"
        />

        {/* Main Theme Styles + Bootstrap */}
        <link rel="stylesheet" media="screen" href="/assets/css/theme.min.css" />
        <link rel="stylesheet" href="/assets/css/globals.css" />
      </head>

      <body className={poppins.variable}>
        {/* Preloader */}
        <Preloader />

        <main className="page-wrapper">
          <Header headerdata={headerData} menu={menu}  />
          {children}
          <Footer footerData={footerData} />
        </main>

        {/* Back to top button */}
        <a href="#top" className="btn-scroll-top" data-scroll>
          <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
          <i className="btn-scroll-top-icon bx bx-chevron-up"></i>
        </a>

        {/* Bootstrap Client Loader */}
        <BootstrapClient />
      </body>
    </html>
  );
}
