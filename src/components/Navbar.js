import React from 'react';
import NavbarItem from "./NavbarItem"

function Navbar() 
{
    return (
        <>
            <nav className="bg-[#111111]">
                <div className="container mx-auto px-4 py-2 flex flex-row items-center justify-between">
                    <div className="text-white font-medium text-2xl px-2 py-2">My Portfolio</div>
                    
                    <div className="space-x-[2px]">
                        <NavbarItem text="About" link="#about"/>
                        <NavbarItem text="Projects" link="#projects"/>
                        <NavbarItem text="Skills" link="#projects"/>
                        <NavbarItem text="Contact" link="#contact"/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
