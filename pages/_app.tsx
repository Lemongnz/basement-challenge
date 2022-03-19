import type {AppProps} from "next/app";
import Head from "next/head";
import {Provider} from "react-redux";

import {store} from "../store";
import "../css/global.css";

import "../css/fonts/basement-grotesque.css";

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Basement Supply</title>
        <meta content="Coding challenge for basement.studio." name="description" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default App;
