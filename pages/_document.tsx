import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { FC } from "react";

const IPhoneContainer: FC = ({ children }) => (
  <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
    <div className="bg-white" style={{ height: 812, width: 375 }}>
      {children}
    </div>
  </div>
);

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
          <IPhoneContainer>
            <Main />
          </IPhoneContainer>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
