import { Moon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Left */}
      Collapse Button
      {/* Right */}
      <div className="flex items-center gap-4">
        <Link href="/"> Dashboard</Link>
        <Moon />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;
