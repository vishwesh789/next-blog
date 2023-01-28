import "../styles/globals.css";
import Script from "next/script";
import localFont from '@next/font/local'

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../public/fonts/VAGRundschriftD.ttf' }
)



export default function App({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
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
