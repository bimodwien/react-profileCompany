import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-10 py-8">
        <div>Logo</div>
        <div className="flex gap-5 pr-6">
          <div>Home</div>
          <div>About</div>
          <div>Profile</div>
          <div>Hilih</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
