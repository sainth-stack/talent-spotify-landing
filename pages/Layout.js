import ScrollToTop from "react-scroll-to-top";
import Head from "next/head"; // Import the Head component from Next.js
import Footer from "../Components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <main>{children}</main>
      <ScrollToTop smooth color="#2A7A7B" />
      
    </>
  );
}
