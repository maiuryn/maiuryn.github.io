import React from "react";

function Section(props)
{
    return (
        <>
            <div className={"flex flex-row flex-wrap justify-evenly ease-in-out text-lg duration-200 mb-[30%] px-[5%] py-[5%] w-[80%] min-h-[500px] mx-auto bg-[#171717] rounded-xl " + props.override} id={props.id}>
                <h1 className="text-[3rem] pb-10 font-medium w-full">
                    {props.header}
                </h1>
                {props.children}
            </div>
        </>
    );
}

export default Section;