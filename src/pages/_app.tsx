import RootLayout from "@/components/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from 'react-redux'
import { persistor, store } from "@/Store/store";
import { PersistGate } from 'redux-persist/integration/react'; //The package is a part of redux-persist, a library that helps you manage and persist the Redux state in your application.terminal command-'npm install redux-persist redux react-redux'. 
import { SessionProvider } from "next-auth/react";


export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return (
    <Provider store = {store}>
      <PersistGate persistor = {persistor} loading={null}>
      <SessionProvider session={session}>

          <div className="font-bodyFont bg-gray-300">
          <RootLayout>
          <Component {...pageProps} />
          </RootLayout>
          </div>

      </SessionProvider>
      </PersistGate>
    </Provider>
  );

}