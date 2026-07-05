import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/layout/Footer/Footer";
import Navbar from "../components/layout/Navbar/Navbar";

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    const element = document.getElementById(hash.slice(1));
    if (!element) return;

    let top = 0;
    let el: HTMLElement | null = element;
    while (el) {
      top += el.offsetTop;
      el = el.offsetParent as HTMLElement | null;
    }

    window.scrollTo({ top, behavior: "smooth" });
  }, [pathname, hash]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
