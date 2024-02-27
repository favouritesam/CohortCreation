import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Provider} from "react-redux";
import React from "react";
import {store} from "@/redux/store";

export default function App({Component, pageProps}: AppProps) {
    return (

        <Provider store={store}>
            <main>
                <Component {...pageProps} />
            </main>
        </Provider>
    )
}
