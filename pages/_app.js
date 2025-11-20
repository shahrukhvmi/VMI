// pages/_app.js
import "@/styles/globals.css";
import "@/styles/style.css";
import "@/styles/fonts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
const StarsCanvas = dynamic(() => import("@/components/StarsCanvas"), {
  ssr: false,
});
import WhatsAppButton from "@/components/WhatsappBtn";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const Favicons = () => (
    <Head>
      {/* Light mode favicon */}
      <link
        rel="icon"
        type="image/png"
        href="/favicon.png"
        media="(prefers-color-scheme: light)"
      />

      {/* Dark mode favicon */}
      <link
        rel="icon"
        type="image/png"
        href="/favicon-white.svg"
        media="(prefers-color-scheme: dark)"
      />

      {/* Default favicon fallback */}
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
  );

  // ✅ If the page opts out of layout
  if (Component.disableLayout) {
    return (
      <>
        <Favicons />
        <Component {...pageProps} />
      </>
    );
  }

  // ✅ Default global layout
  return (
    <>
      <Favicons />

      <NavBar />
      <StarsCanvas />

      <Component {...pageProps} />

      <WhatsAppButton />
      <Footer />
    </>
  );
}
