import ScrollToTop from "react-scroll-to-top";
export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <ScrollToTop smooth color="#2A7A7B" />
    </>
  )
}