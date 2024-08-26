import React from "react";
import Section from "./Section";

function About()
{
    return(
    <>
        <div className="snap-mandatory">
            <Section id="about" header="Hi.">
                <p className="text-left max-w-[40%]">
                    My name is Sebastian Ho. <br/>
                    <br />
                    I recently graduated from the University of Illinois at Chicago with a Bachelor's of Science in Computer Science in Spring 2024. <br />
                    <br />
                    I'm currently completing a Master's of Computer Science at the University of Illinois at Urbana-Champaign. <br />
                    <br />
                    My expected graduation date is May 2026. <br />
                    <br />
                </p>
            </Section>
        </div>
    </>
    );
}

export default About;