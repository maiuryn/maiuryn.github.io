import React from "react";

function SkillItem(props)
{
    return (
        <>
            <div className="overflow-hidden max-w-[150px] max-h-[180px] bg-[#242424] rounded-md m-[10px]">
                <p className="p-1 text-center">{props.name}</p>
                <img draggable="false" className="" src={props.src} alt={"Picture of " + props.name}></img>
            </div>
        </>
    );
}

export default SkillItem;