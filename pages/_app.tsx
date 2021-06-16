import { FC } from "react";

import "tailwindcss/tailwind.css";

const IPhoneContainer: FC = ({ children }) => (
  <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
    <div
      className="bg-gray-100 rounded-3xl"
      style={{ height: 812, width: 375 }}
    >
      {children}
    </div>
  </div>
);

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IPhoneContainer>
      <Component {...pageProps} />
    </IPhoneContainer>
  );
}
export default MyApp;
