import "bootstrap/dist/css/bootstrap.css"; // Bootstrap first
import "slick-carousel/slick/slick.css"; // Third-party styles
import "slick-carousel/slick/slick-theme.css"; // Third-party styles
import "../styles/globals.css"; // Custom global styles
import "../styles/section.css"; // Custom section styles
import "../styles/navbar.css"; // Custom navbar styles
import "../styles/Animate.css"; // Custom animation styles
import "../styles/Career.css"; // Custom career page styles
import "../styles/ContactUs.css"; // Custom contact page styles


import { useEffect } from "react";
import Layout from "./Layout";
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap")
        .then(() => console.log("Bootstrap JS loaded"))
        .catch((error) => console.error("Error loading Bootstrap JS:", error));
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
     
    </Layout>
  );
}

export default MyApp;