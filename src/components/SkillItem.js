import React from "react";

function SkillItem(props)
{
    return (
        <>
            <div className="overflow-hidden max-w-[150px] max-h-[190px] bg-[#242424] rounded-md m-[8px] transition ease-in-out hover:scale-125 hover:shadow-[#9355f7] hover:bg-white hover:text-black duration-200 shadow-black shadow-xl">
                <p className="p-1 text-center">{props.name}</p>
                <img draggable="false" className="h-fit w-fit" src={props.src} alt={"Picture of " + props.name}></img>
            </div>
        </>
    );
}

export default SkillItem;