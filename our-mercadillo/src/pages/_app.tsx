import '../styles/global.css'; 
import React from 'react';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
  );
}

export default MyApp;