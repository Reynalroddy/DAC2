import React from 'react';

export default class AboutOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".video-popup").length) {
            $(".video-popup").magnificPopup({
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: true,
                fixedContentPos: false,
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="about-one about-three">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col-xl-6">
                                <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                    <div className="about-one__img-box">
                                        <div className="about-one__img">
                                            <img src={publicUrl+"assets/images/resources/about-one-img-1.jpg"} alt="" />
                                        </div>
                                        <div className="about-one__small-img wow zoomIn animated animated" data-wow-delay="500ms"
                                            data-wow-duration="2500ms">
                                            <img src={publicUrl+"assets/images/resources/about-one-small-img.jpg"} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-xl-12">
                                <div className="about-one__right">
                                    <div className="about-one__right-content">
                                        <div className="section-title text-left">
                                            <span className="section-title__tagline">About Us</span>
                                            <h2 className="section-title__title">Empowering Hearts, Saving Lives.</h2>
                                        </div>
                                        <p className="about-one__text">DACF is a non-profit organization dedicated to improving cardiovascular health and emergency care in our community. We strive to make a meaningful impact by promoting awareness, providing essential training, and supporting research initiatives in cardiovascular health.</p>
                                        <div className="section-title text-left my-3">
                                            <span className="section-title__tagline">What We Do</span>
                    
                                        </div>
                                        <ul className="list-unstyled about-one__points">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-comment"></span>
                                                </div>
                                                <div className="text">
                                                    <h4>Awareness Campaigns.</h4>
                                                    <p>We actively engage in community outreach programs to raise awareness about cardiovascular health. Through seminars, workshops, and social media campaigns, we educate the general public about risk factors, prevention strategies, and the importance of early intervention</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-comment"></span>
                                                </div>
                                                <div className="text">
                                                    <h4>Training Programs</h4>
                                                    <p>DACF serves as an authorized American Heart Association (AHA) Training Site, offering certified courses on Basic Life Support (BLS), Advanced Cardiovascular Life Support (ACLS), and Pediatric Advanced Life Support (PALS). Our experienced instructors deliver comprehensive training sessions utilizing state-of-the-art equipment and following AHA guidelines.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-comment"></span>
                                                </div>
                                                <div className="text">
                                                    <h4>Research Initiatives</h4>
                                                    <p>We support research projects focused on cardiovascular health, striving to uncover new insights and innovative approaches to prevention, diagnosis, and treatment. By collaborating with healthcare institutions and professionals, we aim to contribute to the advancement of cardiovascular science and improve patient outcomes.</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-comment"></span>
                                                </div>
                                                <div className="text">
                                                    <h4>Community Partnerships</h4>
                                                    <p>DACF believes in the power of collaboration. We actively seek partnerships with healthcare organizations, government agencies, academic institutions, and community groups to create a united front in combating cardiovascular diseases. Together, we can maximize our impact and strengthen the healthcare ecosystem.</p>
                                                </div>
                                            </li>

                                           
                                        </ul>
                                        {/* <div className="about-one__bottom-video-box">
                                            <div className="about-one__btn-box">
                                                <a href="about.html" className="thm-btn about-one__btn">About More</a>
                                            </div>
                                            <div className="about-one__video-link">
                                                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                    <div className="about-one__video-icon">
                                                        <span className="fa fa-play"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}