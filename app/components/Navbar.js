"use client"

import { useState,React } from 'react';
import { LogoLink } from './LogoLink';
import { DesktopNavLinks } from './DesktopNavLinks';
import { MobileDrawer,MobileMenuButton } from './MobileDrawer';
export default function Navbar() {
    let [isDrawerOpen,setDrawer] = useState(false);
    let handleDrawerToggle = () =>{
        setDrawer(!isDrawerOpen)
    }
    return (
        <>
          <div className="w-[95vw] hidden  p-6 sm:flex flex-row justify-between">
            <DesktopNavLinks />
          </div>
          <div className=" w-[95vw] sm:hidden  flex flex-row my-4">
            <MobileMenuButton onClick={handleDrawerToggle} />
            <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
          </div>
        </>
      );
}
