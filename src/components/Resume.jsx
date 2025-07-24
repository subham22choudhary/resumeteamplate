import React, { useEffect } from "react";
import "./Resume.css"; // If you want external CSS, alternatively use useEffect for internal

import profileImage from '../assets/koushik-das.jpg';

const Resume = () => {
    useEffect(() => {
        document.title = "Resume";
    }, []);

    return (
        <section className="my-tb">
            <div className="container">

                {/* Hero Section */}
                <div className="row hero-profile">
                    <div className="col-md-8 col-12">
                        <h1>Koushik Das</h1>
                        <div className="desiionandexp">
                            <span>Senior Digital Marketing</span> | <span>Experience: 10 years 10m</span>
                        </div>
                        <h2>About Me:</h2>
                        <p className="mt-0 lh-2">
                            Experienced Digital Marketing Manager with over a decade of expertise
                            specializing
                            in
                            B2B Growth
                            Strategy and successfully scaling B2B SaaS businesses from 10M to 100M in ARR. Proven track
                            record
                            in Performance Marketing and Demand Generation. Adept at leveraging digital platforms for
                            driving
                            business growth and brand visibility. Proficient in targeting and engaging specific
                            audiences to
                            optimize marketing efforts and increase ROI. Strong analytical skills and a strategic
                            mindset to
                            adapt to evolving market trends and consumer behavior. A results-oriented professional
                            capable of
                            maximizing marketing impact and achieving organizational objectives.
                            {/* (Truncated for brevity, insert full paragraph) */}
                        </p>
                    </div>
                    <div className="col-md-4 col-12">
                        <img src={profileImage} alt="Koushik Das" className="img-fluid" />
                    </div>
                </div>

                {/* Skills */}
                <h2>Skills</h2>
                <div id="skillset">
                    {[
                        "SEM", "Digital Marketing", "Demand Generation", "Growth Marketing",
                        "Social Media Marketing", "Stakeholder Management", "Online Marketing",
                        "Performance Marketing", "Google Analytics"
                    ].map((skill) => (
                        <p key={skill}>{skill}</p>
                    ))}
                </div>

                {/* Work Experience */}
                <h2 className="mb-1">Work experience</h2>
                <div className="row experience-sec">
                    <div className="col-md-6 col-12">
                        {renderExperience([
                            {
                                title: "Senior Marketing and Digital Manager - HighRadius",
                                time: "May 2021 - Present",
                                bullets: [
                                    "Lead the complete Demand generation through Paid Channels for the business.",
                                    "Work closely with different teams...",
                                    "Strategize paid campaigns to generate leads...",
                                    "Identify levers in improving business performance...",
                                    "Overlook SEO strategy...",
                                    "Own the complete Paid Search program...",
                                    "Work in tandem with the drip marketing team...",
                                    "Identify trends and insights...",
                                    "Track the success and return..."
                                ]
                            },
                            {
                                title: "Marketing Manager - MONARCH ERGO",
                                time: "Jan 2020 - Apr 2021",
                                bullets: [
                                    "Develop multi-channel campaigns...",
                                    "Implement effective marketing strategies...",
                                    "Build strategies to create a strong digital connection...",
                                    "Launch organic and paid content strategy...",
                                    "Monitor and evaluate social media results...",
                                    "Prepare promotional emails and newsletters...",
                                    "Perform A/B testing...",
                                    "Create digital marketing performance reports...",
                                    "Forecast product performance...",
                                    "Coordinate product launches...",
                                    "Plan and execute SEO strategies...",
                                    "Manage SEO agency resources..."
                                ]
                            },
                            {
                                title: "Account Manager - Regalix",
                                time: "Mar 2018 - Dec 2019",
                                bullets: [
                                    "Worked as a Consultant for the UK Market...",
                                    "Managed 30 partners...",
                                    "Created and integrated various campaigns...",
                                    "Developed new content strategies...",
                                    "Increased ROI of B2B leads...",
                                    "Reduced customer loss rate...",
                                    "Analyzed campaign results...",
                                    "Implemented A/B testing...",
                                    "Planned and executed internal marketing..."
                                ]
                            }
                        ])}
                    </div>

                    <div className="col-md-6 col-12">
                        {renderExperience([
                            {
                                title: "Marketing Executive - EC-Council",
                                time: "Dec 2016 - Feb 2018",
                                bullets: [
                                    "Created online marketing strategies...",
                                    "Analyzed web metrics...",
                                    "Promoted marketing events...",
                                    "Worked with CMS tools...",
                                    "Performed comprehensive SEO audits...",
                                    "Executed on-page and off-page SEO strategies...",
                                    "Used tools like Ahrefs...",
                                    "Implemented link-building techniques...",
                                    "Ran HTML email marketing campaigns..."
                                ]
                            },
                            {
                                title: "Digital Marketer - Kava IT Solutions",
                                time: "Mar 2015 - Dec 2016",
                                bullets: [
                                    "Managed daily paid search campaigns...",
                                    "Gathered data from multiple sources...",
                                    "Collaborated with branding, design...",
                                    "Launched Facebook campaigns...",
                                    "Analyzed traffic and conversion data...",
                                    "Designed and executed A/B and multivariate testing..."
                                ]
                            }
                        ])}
                    </div>
                </div>

                {/* Projects */}
                <div>
                    <h2 className="mb-1">Projects</h2>
                    <div className="desgtim">
                        <h3>The Quiz</h3>
                        <h3>90 Days</h3>
                    </div>
                    <p className="mt-05">
                        Go to Market strategy building through social media platform for online trivia game "The Quiz"
                    </p>
                </div>

                {/* Education */}
                <div>
                    <h2>Education</h2>
                    <div className="culexp mb-2">
                        <div className="desgtim">
                            <h3 className="mt-05 mb-05">MBA/PGDM | Marketing</h3>
                            <h3 className="mt-05 mb-05">2015</h3>
                        </div>
                        <div className="careerdetails">
                            <p className="mt-05 mb-05">VJIM, Hyderabad</p>
                            <p className="mt-05 mb-05">Marks - 78%</p>
                        </div>
                    </div>

                    <div className="culexp">
                        <div className="desgtim">
                            <h3 className="mt-05 mb-05">B.Tech/B.E. | Electrical</h3>
                            <h3 className="mt-05 mb-05">2009</h3>
                        </div>
                        <div className="careerdetails">
                            <p className="mt-05 mb-05">Nagpur University</p>
                            <p className="mt-05 mb-05">Marks - 64%</p>
                        </div>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="additionalinformation">
                    <h2>Additional Information</h2>
                    <div>
                        <h3><b>Hobbies:</b> Listening To Music, Cooking</h3>
                        <h3><b>Languages:</b> English, Hindi, Bengali</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Helper: Render Experience Items
const renderExperience = (experiences) =>
    experiences.map(({ title, time, bullets }) => (
        <div className="culexp" key={title}>
            <div className="desgtim">
                <h3>{title}</h3>
                <h3>{time}</h3>
            </div>
            <div className="careerdetails">
                <ul>
                    {bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                    ))}
                </ul>
            </div>
        </div>
    ));

export default Resume;
