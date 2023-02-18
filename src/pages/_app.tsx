import { AppProps } from "next/app";

import "modern-css-reset/dist/reset.min.css";
import "../style/global.css";

// For use of App
// - persist layouts
// - keeping state when navigating pages
// - inject additional data into pages
// - add global CSS

export default function CustomApp({ Component, pageProps }: AppProps) {
  console.log("pageProps:", pageProps);
  return <Component {...pageProps} />;
}

CustomApp.getInitialProps = async () => {
  return { pageProps: { name: "Hello, world!" } };
};
