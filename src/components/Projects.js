import React from "react";
import ProjectItem from "./ProjectItem";
import Section from "./Section";
import playlist from "../images/playlist.gif"
import wordle from "../images/wordle.gif"
import keywordTool from "../images/keywordtool.png"
import dlld from "../images/dlld.png"

function Projects()
{
    return(
    <>
        <div className="snap-mandatory">
            <Section id="projects" header="Projects" override="justify-center">
                <ProjectItem name="Keyword Tool" img={keywordTool} link="https://www.youtube.com/watch?v=518OqOcI6CU">
                    <p className="text-2xl">
                        A dashboard to research keywords
                    </p>
                </ProjectItem>
                <ProjectItem name="Death Lives Life Dies" img={dlld} link="https://youtu.be/wMsPHzMtaac">
                    <p className="text-2xl">
                        A VR game created for the CAVE2 system
                    </p>
                </ProjectItem>
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