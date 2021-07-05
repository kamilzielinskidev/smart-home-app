import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <title>Smart Home App</title>
        <meta property="og:title" content="Smart Home App" />
        <meta
          property="og:image"
          content="https://smart-home-app.vercel.app/metaImage.png"
        />
        <meta
          property="og:description"
          content="Smart Home App for managing your smart home devices."
        />
        <meta
          name="description"
          content="Smart Home App for managing your smart home devices."
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
