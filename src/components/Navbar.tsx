'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <HoveredLink href="#">
                    <MenuItem setActive={setActive} active={active} item="Home" />
                </HoveredLink>
                <HoveredLink href="#">
                    <MenuItem setActive={setActive} active={active} item="Service Provider" />
                </HoveredLink>
                <HoveredLink href="#">
                    <MenuItem setActive={setActive} active={active} item="More About Us" />
                </HoveredLink>
                <HoveredLink href="#">
                    <MenuItem setActive={setActive} active={active} item="Help" />
                </HoveredLink>
            </Menu>
        </div>
    );
}

export default Navbar;


