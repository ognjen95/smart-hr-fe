import { ApolloProvider } from "@apollo/client";
import type { AppInitialProps } from "next/app";
import React, { ComponentType } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css'
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
        <>
          <Component {...pageProps} />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
            theme="colored"
            toastStyle={{
              borderRadius: ".5rem",
              minWidth: '350px'
            }}
          />
        </>
      </ErrorBoundary>
    </ApolloProvider>
  );
};

export default MyApp;
