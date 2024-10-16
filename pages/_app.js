import '../styles/globals.css';
import '../styles/section.css';
import '../styles/navbar.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.css';

import { useEffect } from "react";
import Layout from './Layout';
function MyApp({ Component, pageProps }) {
 
  useEffect(() => {
  if (typeof window !== 'undefined') {
    try {
      require('bootstrap/dist/js/bootstrap');
    } catch (error) {
      console.error("Error loading Bootstrap JS:", error);
    }
  }
}, []);



  return (
    <Layout>

      <Component {...pageProps} /></Layout>
  )
}

export default MyApp
