"use client";
import React from "react";
import Navvbar from "./Navvar";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  if(pathName.startsWith("/dashboard")) return <></>;

  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <Navvbar/>
      </header>
    </div>
  );
};

export default Header;
