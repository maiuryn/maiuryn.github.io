import React from "react";
import ContactIcon from "./ContactIcon";
import Section from "./Section";
import linkedin from '../images/linkedin_black.png'
import github from '../images/github.png'
import email from '../images/email.png'

function Contact()
{
    return(
    <>
        <div className="snap-mandatory">
            <Section id="contact" header="Contact" override="mb-[5%]">
                <ContactIcon link="https://github.com/maiuryn">
                        <img src={github} alt="Github" className="object-scale-down"></img>
                </ContactIcon>
                <ContactIcon link="https://www.linkedin.com/in/sebastian-ho/">
                        <img src={linkedin} alt="Linkedin" className="object-scale-down"></img>
                </ContactIcon>
                <ContactIcon link='mailto:seb.h.0311@hotmail.com'>
                        <img src={email} alt="Email" className="object-scale-down py-[12px]"></img>
                </ContactIcon>
            </Section>
        </div>
    </>
    );
}

export default Contact;