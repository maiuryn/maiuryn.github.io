import React from 'react';

function ContactIcon(props) 
{
    return (
        <>
            <a href={props.link} target="_blank" rel="noreferrer" className="container w-[128px] h-[128px] p-3 text-xl transition ease-in-out hover:bg-[#1f1f1f] active:bg-[#eeeeee] bg-[#242424] duration-200 rounded-md">
                {props.children}
            </a>
        </>
    );
}

export default ContactIcon;
