import Layout from "@components/layout";
import Meta from "@components/meta";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

// For more info, see:
// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react#nextjs
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
