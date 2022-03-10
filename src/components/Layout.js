import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <div className="content font-mont">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
