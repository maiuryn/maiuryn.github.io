import React from 'react';

function NavbarItem(props) 
{
    return <a href={props.link} className="px-3 py-2 text-xl transition ease-in-out hover:bg-[#1f1f1f] active:bg-[#eeeeee] duration-200 rounded-md">{props.text}</a>;
}

export default NavbarItem;
