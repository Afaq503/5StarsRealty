"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/property"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Properties"
          ></MenuItem>
        </Link>
        {/* <MenuItem
          setActive={setActive}
          active={active}
          item="Our Properties"
        >
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href={'/property'}>
                All Properties
            </HoveredLink>
            <HoveredLink href={'/property'}>
                Homes
            </HoveredLink>
            <HoveredLink href={'/property'}>
                Aprtments
            </HoveredLink>
            <HoveredLink href={'/property'}>
                Palates
            </HoveredLink>
            <HoveredLink href={'/property'}>
                Bulidings
            </HoveredLink>
            </div>
        </MenuItem> */}
        <Link href={'/contact'}>
            <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
            ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
