import React from "react";
import Banner from "../components/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { connect } from "react-redux";
// import 'swiper/css/autoplay';
function About({ aLang, t }) {
    return (
        <>
        <div className="pt_80"></div>
            <Banner
                bannerBg="http://themes.g5plus.net/april/wp-content/uploads/2017/08/page-title-02.jpg?id=2337"
                pageName="About Us"
            />

            <section id="about">
                <div className="container">
                    <div className="about-img">
                        <img
                            src="http://themes.g5plus.net/april/wp-content/uploads/2017/08/background-05.jpg?id=2043"
                            alt=""
                        />
                    </div>
                    <div className="about-text">
                        <h2>{t[aLang].aboutTitle}</h2>
                        <p>{t[aLang].aboutDesc} </p>
                    </div>
                </div>
            </section>

            <section id="services">
                <ul>
                    <li>
                        <span style={{ color: "#F76B6A" }}>
                            <i className="fa-solid fa-gifts"></i>
                        </span>
                        <h5>{t[aLang].freeShipping}</h5>
                        <p>{t[aLang].freeShippingDesc}</p>
                    </li>
                    <li>
                        <span style={{ color: "#80D1DC" }}>
                            <i className="fa-solid fa-headset"></i>
                        </span>
                        <h5>{t[aLang].supportCustomer}</h5>
                        <p>{t[aLang].supportCustomerDesc}</p>
                    </li>
                    <li>
                        <span style={{ color: "#8B8BD4" }}>
                            <i className="fa-solid fa-shield-halved"></i>
                        </span>
                        <h5>{t[aLang].securePayments}</h5>
                        <p>{t[aLang].securePaymentsDesc}</p>
                    </li>
                </ul>
            </section>

            <section id="testimonials">
                <div className="container">
                    <ul className="testimonials">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                        // autoplay={{
                        //     delay: 500,
                        //     // disableOnInteraction: true
                        // }}
                        >
                            <SwiperSlide>
                                {" "}
                                <li>
                                    <div className="t-back">#01</div>
                                    <p>{t[aLang].testimonial1}</p>
                                    <div className="author">
                                        <img
                                            src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/testimonial-01-80x80.jpg"
                                            alt=""
                                        />
                                        <h6>LEE BUI</h6>
                                        <span>/ Designer</span>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <li>
                                    <div className="t-back">#02</div>
                                    <p>{t[aLang].testimonial2}</p>
                                    <div className="author">
                                        <img
                                            src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/testimonial-02-80x80.jpg"
                                            alt=""
                                        />
                                        <h6>LEE BUI</h6>
                                        <span>/ Designer</span>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <li>
                                    <div className="t-back">#03</div>
                                    <p>{t[aLang].testimonial3} </p>
                                    <div className="author">
                                        <img
                                            src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/testimonial-03-80x80.jpg"
                                            alt=""
                                        />
                                        <h6>LEE BUI</h6>
                                        <span>/ Designer</span>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <li>
                                    <div className="t-back">#04</div>
                                    <p>{t[aLang].testimonial4}</p>
                                    <div className="author">
                                        <img
                                            src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/testimonial-02-80x80.jpg"
                                            alt=""
                                        />
                                        <h6>LEE BUI</h6>
                                        <span>/ Designer</span>
                                    </div>
                                </li>
                            </SwiperSlide>

                        </Swiper>
                    </ul>
                </div>
            </section>


            {/* Brends */}
            <section id="brends">
                <div className="container">
                    <ul>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={6}
                        >
                            <SwiperSlide>
                                <li>
                                    <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_01.jpg" alt="" />
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li>
                                    <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_02.jpg" alt="" />
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li>
                                    <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_03.jpg" alt="" />
                                </li>
                            </SwiperSlide>

                            <SwiperSlide>
                                <li>
                                    <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_04.jpg" alt="" />
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li>
                                    <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_05.jpg" alt="" />
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li>
                                    <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_06.jpg" alt="" />
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li>
                                    <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_01.jpg" alt="" />
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li>
                                    <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_02.jpg" alt="" />
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li>
                                    <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_03.jpg" alt="" />
                                </li>
                            </SwiperSlide>
                        </Swiper>



                    </ul>
                </div>
            </section>
        </>
    );
}
const t = (a) => a;
export default connect(t)(About);