"use client";

import Link from "next/link";
import React from "react";
import ThemeToggle from "./Theme-Provider/Theme-Toggle";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Left */}
      Collapse Button
      {/* Right */}
      <div className="flex items-center gap-4">
        <Link href="/"> Dashboard</Link>
        <ThemeToggle />
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
