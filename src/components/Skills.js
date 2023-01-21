import React from "react";
import Section from "./Section";
import SkillItem from "./SkillItem";
import html from "../images/html.png"
import css from "../images/css.png"
import js from "../images/js.png"
import c from "../images/c.png"
import cpp from "../images/cpp.png"
import python from "../images/python.png"
import react from "../images/react.png"
import linux from "../images/linux.png"
import lua from "../images/lua.png"
import tailwind from "../images/tailwind.png";

function Skills()
{
    return(
    <>
        <div className="snap-mandatory flex justify-between">
            <Section id="skills" header="Skills">
                <SkillItem src={c} name="C" />
                <SkillItem src={cpp} name="C++" />
                <SkillItem src={python} name="Python" />
                <SkillItem src={html} name="HTML" />
                <SkillItem src={css} name="CSS" />
                <SkillItem src={js} name="Javascript" />
                <SkillItem src={react} name="React" />
                <SkillItem src={tailwind} name="Tailwind CSS" />
                <SkillItem src={linux} name="Linux" />
                <SkillItem src={lua} name="Lua" />
                
            </Section>
        </div>
    </>
    );
}

export default Skills;