import "@/styles/globals.css";
import { ArticleProvider } from "@/Components/layout/Context";

export default function App({ Component, pageProps }) {
  return (
    <ArticleProvider>
      <Component {...pageProps} />
    </ArticleProvider>
  );
}
