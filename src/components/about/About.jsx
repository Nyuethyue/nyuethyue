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
                    </div>
                </div>
            </div>
        </section>
        /** ====== About section end ======= */
    )
}

export default About
