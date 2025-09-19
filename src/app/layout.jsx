import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Etqan | A trusted partner in digital transformation",
  description: "Etqan - A trusted partner in digital transformation",
  keywords:
    "Technology, business, creative agency, digital transformation, Software, Cutting edge IT Services",
  authors: [{ name: "Createx Studio" }],
  icons: {
    icon: [
      {
        url: "/assets/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      { url: "/assets/favicon/favicon.ico" },
    ],
    apple: [{ url: "/assets/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/assets/favicon/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};
async function getGlobalSettings() {
  try {
    const res = await fetch(`${process.env.STRAPI_URL}/api/global-setting`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_JWT}`,
      },
      next: { revalidate: 60 }, // ISR → static + refresh every 60s
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

  // Extract header and footer blocks
  const headerData = globalData.find(
    (item) => item.__component === "layout.header"
  );
  const menuLinks = globalData.find(
    (item) => item.__component === "layout.menu-links"
  );
  const dropdownData = globalData.find(
    (item) => item.__component === "layout.dropdown"
  );
  const footerData = globalData.find(
    (item) => item.__component === "layout.footer"
  );

  return (
    <html lang="en" data-bs-theme="dark">
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
      <body className={`${interSans.variable} ${jetBrainsMono.variable}`}>
        {/* Preloader (React-controlled) */}
        <Preloader />

        <main className="page-wrapper">
          <Header
            header={headerData}
            menuLinks={menuLinks}
            dropdown={dropdownData}
          />
          {children}
        </main>
         <Footer footer={footerData} header={headerData} />
        {/* Back to top button */}
        <a href="#top" className="btn-scroll-top" data-scroll>
          <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">
            Top
          </span>
          <i className="btn-scroll-top-icon bx bx-chevron-up"></i>
        </a>

        {/* Vendor Scripts */}
        <Script
          src="/assets/vendor/jarallax/dist/jarallax.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/@lottiefiles/lottie-player/dist/lottie-player.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/swiper/swiper-bundle.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/lightgallery/lightgallery.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/lightgallery/plugins/video/lg-video.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/shufflejs/dist/shuffle.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/parallax-js/dist/parallax.min.js"
          strategy="lazyOnload"
        />
        <Script src="/assets/js/theme.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
