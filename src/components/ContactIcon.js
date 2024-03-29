import React from 'react';

function ContactIcon(props) 
{
    return (
        <>
            <a href={props.link} target="_blank" rel="noreferrer" className="mx-[5%] container w-[128px] h-[128px] p-3 text-xl transition ease-in-out hover:bg-white shadow-xl shadow-black hover:shadow-[#9355f7] bg-[#242424] duration-200 rounded-md">
                {props.children}
            </a>
        </>
    );
}   

export default ContactIcon;
