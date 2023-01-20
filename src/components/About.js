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
                    I'm currently an Undergraduate Junior at the University of Illinois at Chicago studying Computer Science with a minor in Math. <br />
                    <br />
                    My expected graduation date is May 2024. <br />
                    <br />


                </p>
            </Section>
        </div>
    </>
    );
}

export default About;