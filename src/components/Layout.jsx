import React from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="global-wrapper">
      <Navigation />

      {children}

      {/* Footer? */}
    </div>
  );
};
export default Layout;
