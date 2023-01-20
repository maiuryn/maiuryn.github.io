import React from "react";
import ProjectItem from "./ProjectItem";
import Section from "./Section";

function Projects()
{
    return(
    <>
        <div className="snap-mandatory">
            <Section id="projects" header="Projects">
                <ProjectItem name="Music Player" img=""/>
                <ProjectItem name="Music Player" img=""/>
            </Section>
        </div>
    </>
    );
}

export default Projects;