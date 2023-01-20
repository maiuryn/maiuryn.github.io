import React from "react";

function ProjectItem(props)
{
    return(
        <>
            <a href={props.link} target="_blank" rel="noreferrer">
                <div className="mx-auto my-[5%] flex flex-col content-center max-w-[100%] overflow-hidden transition hover:text-black hover:bg-[#ffffff] hover:shadow-[#9355f7] duration-200 bg-[#242424] rounded-md shadow-black shadow-xl pb-10 ">
                    <h1 className="text-3xl p-5">{props.name}</h1>
                    <img draggable="false" className="w-full h-full" src={props.img} alt={"Image of " + props.name}></img>
                    <div className="text-center p-5">
                        {props.children}
                    </div>
                    
                </div>
            </a>
        </>
    );
}


export default ProjectItem;