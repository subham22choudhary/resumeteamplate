import React, { useEffect } from "react";
import "./Resume.css"; // If you want external CSS, alternatively use useEffect for internal

import profileImage from '../assets/koushik-das.jpg';

const Resume = () => {
    useEffect(() => {
        document.title = "Koushik Das Resume";
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
                                    "Lead end-to-end demand generation through Paid Channels including Google Ads, LinkedIn, and programmatic.",
                                    "Collaborate cross-functionally with Sales and Business Development to support lead nurturing through deal closure.",
                                    "Design full-funnel paid campaigns and optimize conversions across each stage.",
                                    "Drive strategic initiatives to improve marketing ROI and identify business growth opportunities.",
                                    "Oversee SEO roadmap, aligning Brand and Non-brand content strategies for better visibility.",
                                    "Manage and execute Paid Search programs from strategy, keyword research, copywriting, to performance delivery.",
                                    "Partner with drip marketing team to guide prospects through the funnel using tailored content.",
                                    "Leverage analytics to identify patterns, trends, and optimization areas in real-time.",
                                    "Report marketing impact and ROI to senior stakeholders, refining campaign tactics accordingly."
                                ]
                            },
                            {
                                title: "Marketing Manager - MONARCH ERGO",
                                time: "Jan 2020 - Apr 2021",
                                bullets: [
                                    "Developed and managed digital marketing strategies across paid and organic channels.",
                                    "Built brand identity online through targeted social media, email campaigns, and ORM improvements.",
                                    "Executed full-funnel organic and paid campaigns to improve lead quality and engagement.",
                                    "Monitored social performance across LinkedIn, Facebook, Instagram, and Twitter.",
                                    "Launched newsletters and email campaigns with segmentation strategies for improved performance.",
                                    "Implemented SEO strategy, increasing website traffic and keyword ranking internationally.",
                                    "Managed agency relationships to deliver SEO outcomes and campaign goals.",
                                    "Used A/B and split testing extensively to improve digital touchpoints and messaging.",
                                    "Forecasted product success using competitive and market research insights.",
                                    "Planned GTM strategies for product launches aligned with brand and business goals."
                                ]
                            },
                            {
                                title: "Account Manager - Regalix",
                                time: "Mar 2018 - Dec 2019",
                                bullets: [
                                    "Worked with Google UK partners as a Consultant to manage digital marketing strategies.",
                                    "Handled 30+ B2B clients with a combined revenue impact of $320K annually.",
                                    "Built and optimized PPC campaigns across Google Ads with tailored strategies per client.",
                                    "Improved B2B lead ROI from 15% to 31% and reduced churn by 4.8% year-over-year.",
                                    "Recommended landing page improvements and campaign optimizations for better quality scores.",
                                    "Provided in-depth campaign reporting, identifying key performance levers.",
                                    "Led A/B testing initiatives and implemented learning into real-time campaign changes.",
                                    "Coordinated with internal creative and product teams to align messaging and offer rollouts."
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
                                    "Executed SEO-focused digital strategies, improving global keyword rankings and traffic.",
                                    "Performed in-depth SEO audits covering on-page, off-page, and technical SEO parameters.",
                                    "Optimized meta tags, content structure, image sizes, and page speed to boost organic performance.",
                                    "Managed CMS platforms like WordPress, Blogger, and Tumblr for content publishing.",
                                    "Ran HTML-based email marketing campaigns with detailed A/B testing and optimization.",
                                    "Promoted international events on Facebook, Twitter, and LinkedIn with geo-targeted strategies.",
                                    "Used Ahrefs and Google Keyword Planner to guide keyword strategy and link building.",
                                    "Collaborated with content writers and designers to create search-optimized landing pages."
                                ]
                            },
                            {
                                title: "Digital Marketer - Kava IT Solutions",
                                time: "Mar 2015 - Dec 2016",
                                bullets: [
                                    "Managed day-to-day operations of paid campaigns including SEM and Facebook Ads.",
                                    "Analyzed campaign data across ad platforms and reported insights to leadership.",
                                    "Proposed and implemented bid, keyword, and ad copy changes to improve CPA.",
                                    "Launched A/B and multivariate testing frameworks across ads and landing pages.",
                                    "Worked cross-functionally with branding and web teams to align campaign creatives.",
                                    "Drove increased engagement and leads by optimizing landing page UX and conversion paths.",
                                    "Extracted actionable insights from traffic and conversion metrics to improve future performance."
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
