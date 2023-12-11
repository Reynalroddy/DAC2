import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper";

export default class HeroOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="main-slider">
                    <Swiper 
                        loop={true}
                        slidesPerView={1}
                        effect="fade"
                        autoplay={{delay:   5000}}
                        modules={[EffectFade, Pagination, Navigation]}
                        pagination={{
                            el: "#main-slider-pagination",
                            type: "bullets",
                            clickable: true
                        }}
                        navigation={{
                            nextEl: "#main-slider__swiper-button-next",
                            prevEl: "#main-slider__swiper-button-prev"
                        }}
                        className="swiper-container thm-swiper__slider">

                        <div className="swiper-wrapper">

                            {/* Start Swiper Slide Single */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/hero-2.jpg)'}}></div>
                                <div className="main-slider-shape-1"></div>
                                <div className="main-slider-shape-2"></div>
                                <div className="main-slider-shape-3 zoominout"></div>
                                <div className="main-slider-shape-4 zoominout-2"></div>
                                <div className="main-slider-shape-5">
                                    <img src={publicUrl+"assets/images/shapes/main-slider-shape-5.png"} alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-7">
                                            <div className="main-slider__content">

                                                <h2>Save the <span>World</span>.</h2>
                                                <p>Enhancing healthcare outcomes and reduce mortality rates associated with <br /> cardiovascular emergencies across Nigeria and Africa . </p>
                                                <Link to={process.env.PUBLIC_URL + `/about`} className="thm-btn main-slider__btn">Leran More</Link>
                                                <div className="main-slider-arrow">
                                                    <img src={publicUrl+"assets/images/shapes/main-slider-shape-1.png"} className="float-bob-x" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Swiper Slide Single */}

                            {/* Start Swiper Slide Single */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/hero-1.jpg)'}}></div>
                                <div className="main-slider-shape-1"></div>
                                <div className="main-slider-shape-2"></div>
                                <div className="main-slider-shape-3 zoominout"></div>
                                <div className="main-slider-shape-4 zoominout-2"></div>
                                <div className="main-slider-shape-5">
                                    <img src={publicUrl+"assets/images/shapes/main-slider-shape-5.png"} alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-7">
                                            <div className="main-slider__content">
                                                <h2>Lets <span>Empower</span> The World.</h2>
                                                <p>Established with a vision to empower medical practitioners and allied health professionals </p>
                                                <Link to={process.env.PUBLIC_URL + `/about`} className="thm-btn main-slider__btn">Leran More</Link>
                                                <div className="main-slider-arrow">
                                                    <img src={publicUrl+"assets/images/shapes/main-slider-shape-1.png"} className="float-bob-x" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Swiper Slide Single */}

                            {/* Start Swiper Slide Single */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/main-slider-1-1.jpg)'}}></div>
                                <div className="main-slider-shape-1"></div>
                                <div className="main-slider-shape-2"></div>
                                <div className="main-slider-shape-3 zoominout"></div>
                                <div className="main-slider-shape-4 zoominout-2"></div>
                                <div className="main-slider-shape-5">
                                    <img src={publicUrl+"assets/images/shapes/main-slider-shape-5.png"} alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-7">
                                            <div className="main-slider__content">
                                                <h2>Reduce the <span>Mortality</span> Rate <br /> for Families.</h2>
                                                <p>There are many reports of high mortality rate in Africa,<br /> our goal
                                                    is to reduce that. </p>
                                                <Link to={process.env.PUBLIC_URL + `/about`} className="thm-btn main-slider__btn">Leran More</Link>
                                                <div className="main-slider-arrow">
                                                    <img src={publicUrl+"assets/images/shapes/main-slider-shape-1.png"} className="float-bob-x" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Swiper Slide Single */}

                        </div>

                        <div className="swiper-pagination" id="main-slider-pagination"></div>

                        <div className="main-slider__nav">
                            <div className="swiper-button-prev" id="main-slider__swiper-button-next">
                                <i className="fa fa-long-arrow-alt-left"></i>
                            </div>
                            <div className="swiper-button-next" id="main-slider__swiper-button-prev">
                                <i className="fa fa-long-arrow-alt-right"></i>
                            </div>
                        </div>

                    </Swiper>
                </section>
            </>
        )
    }
}