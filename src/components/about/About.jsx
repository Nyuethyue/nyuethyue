import React from 'react'
import './about.css'

const About = () => {
    return (
        /** ====== About section start ======= */
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">
                <img src="assets/img/about.jpg" alt="" className="about__img" />

                <div className="about__data">
                    <p className="about__description">
                        Web developer, with extensive knowledge and years of
                        experience, working in web technologies and ui / ux design, delivering quality work. 
                    </p>

                    <div className="about__info">
                        <div>
                            <span className="about__info-title">+07</span>
                            <span className="about__info-name">Years <br /> experience</span>
                        </div>

                        <div>
                            <span className="about__info-title">20+</span>
                            <span className="about__info-name">Completed <br /> Project</span>
                        </div>

                        <div>
                            <span className="about__info-title">+05</span>
                            <span className="about__info-name">Companies <br /> Worked</span>
                        </div>
                    </div>

                    <div className="about__button">
                        <a download="" href="assets/pdf/Alexa-Cv.pdf" className="button button--flex">
                            Download CV <i class="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        /** ====== About section end ======= */
    )
}

export default About
