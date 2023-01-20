import React from "react";

function ProjectItem(props)
{
    return(
        <>
            <div className="min-w-[40%] min-h-[400px] bg-[#242424] rounded-md">
                <h1 className="text-3xl p-5">{props.name}</h1>
                <img src={props.img} alt={"Image of " + props.name}></img>
            </div>
            

        
        </>
    );
}


export default ProjectItem;