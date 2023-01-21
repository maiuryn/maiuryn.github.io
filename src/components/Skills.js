import React from "react";
import Section from "./Section";
import SkillItem from "./SkillItem";
import html from "../images/html.png"
import css from "../images/css.png"
import js from "../images/js.png"

function Skills()
{
    return(
    <>
        <div className="snap-mandatory flex justify-between">
            <Section id="skills" header="Skills">
                <SkillItem src={html} name="HTML" />
                <SkillItem src={css} name="CSS" />
                <SkillItem src={js} name="Javascript" />
            </Section>
        </div>
    </>
    );
}

export default Skills;