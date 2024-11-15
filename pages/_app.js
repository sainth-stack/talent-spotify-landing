import "bootstrap/dist/css/bootstrap.css"; // Load Bootstrap first

import "slick-carousel/slick/slick.css"; // Load third-party styles
import "slick-carousel/slick/slick-theme.css";

import "../styles/globals.css"; // Tailwind's main CSS (includes base styles)
import "../styles/section.css"; // Custom styles
import "../styles/navbar.css";
import "../styles/Animate.css";
import "../styles/Career.css";
import "../styles/ContactUs.css";


import { useEffect } from "react";
import Layout from "./Layout";
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
     <div id="tailwind">
  <Component {...pageProps} />
</div>

    </Layout>
  );
}

export default MyApp;
