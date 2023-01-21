import React from "react";
import ProjectItem from "./ProjectItem";
import Section from "./Section";
import playlist from "../images/playlist.gif"
import wordle from "../images/wordle.gif"

function Projects()
{
    return(
    <>
        <div className="snap-mandatory">
            <Section id="projects" header="Projects" override="justify-center">
                <ProjectItem name="Music Player" img={playlist} link="https://github.com/maiuryn/PlayList">
                    <p className="text-2xl">
                        A simple music player
                    </p>
                </ProjectItem>
                <ProjectItem name="Wordle Guesser" img={wordle} link="https://github.com/maiuryn/Worlde-Guesser">
                    <p className="text-2xl">
                        Algorithm that solves Wordles
                    </p>
                </ProjectItem>
            </Section>
        </div>
    </>
    );
}

export default Projects;