import React from "react";

const Navigation = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-header">
        <h1>K/J</h1>
      </div>
      <div className="nav-items">
        <p className="nav-item">Home</p>
        <p className="nav-item">About</p>
        <p className="nav-item">Projects</p>
        <p className="nav-item">Contact</p>
        <p className="nav-item">Github</p>
        <p className="nav-item">LinkedIn</p>
      </div>
    </div>
  );
};

export default Navigation;

// Navigation items might be spread out a bit.
// I want to have the Github/LinkedIn/Contact in the same general section, but I might shift those to a separate page entirely.
// I might just load up the navigation with items, but then just have links in the actual page that connect to the other routes.
// Depends on how I design it. For now I'm just going to vibe with this.
