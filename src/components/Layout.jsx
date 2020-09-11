import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="global-wrapper">
      <div>
        <h1>Navigation</h1>
      </div>

      {children}

      <div>
        <h1>Footer</h1>
      </div>
    </div>
  );
};
export default Layout;
