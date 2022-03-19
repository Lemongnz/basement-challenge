import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { Provider } from "react-redux";
import { store } from "../store";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <Provider store={store}>
            <div id="modal-root" />
          </Provider>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
