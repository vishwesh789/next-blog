import "../styles/globals.css";
import Script from "next/script";
import localFont from "@next/font/local";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../public/fonts/VAGRundschriftD.ttf" });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const GA_MEASUREMENT_ID = process.env.GOOGLE_MEASUREMENT_ID;

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <main className={myFont.className}>
      <Script
        strategy="afterInteractive"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());
              gtag('config', 'G-1X5JLCQ8LV', {page_path: window.location.pathname,});`,
        }}
      />
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      />
      <Script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      />
      <Component {...pageProps} />
    </main>
  );
}
