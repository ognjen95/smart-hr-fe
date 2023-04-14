import { ApolloProvider } from "@apollo/client";
import type { AppInitialProps } from "next/app";
import React, { ComponentType } from "react";
import { ErrorBoundary } from "react-error-boundary";
// import { ToastContainer } from "react-toastify";

import "../styles/global.css";
import createApolloClient from "~config/apollo-client";

import ErrorFallback from "../components/error-fallback";


const MyApp = ({
  Component,
  pageProps,
}: {
  Component: ComponentType<AppInitialProps>;
  pageProps: AppInitialProps;
}) => {
  const apolloClient = createApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <div data-theme="dark" id="theme-wrapper">
          <Component {...pageProps} />
          {/* <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop
            closeOnClick
            pauseOnHover
          /> */}
        </div>
      </ErrorBoundary>
    </ApolloProvider>
  );
};

export default MyApp;
