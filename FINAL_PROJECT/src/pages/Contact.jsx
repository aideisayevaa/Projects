import React from 'react'
import { connect } from 'react-redux'
import Banner from '../components/Banner'

function Contact({ t, aLang }) {
    return (
        <>
            <div className="pt_80"></div>
            {/* Banner Contact */}
            <Banner
                bannerBg="http://themes.g5plus.net/april/wp-content/uploads/2017/08/page-title-03.jpg?id=2370"
                pageName="Contact"
            />


            {/* Form */}
            <section id="form">
                <div className="container">
                    <form>
                        <legend>{t[aLang].sendUsMesssage}</legend>
                        <div>
                            <input type="text" placeholder={t[aLang].name} />
                            <input type="text" placeholder={t[aLang].surname} />
                        </div>
                        <div>
                            <input type="email" placeholder={t[aLang].email} />
                            <input type="text" placeholder={t[aLang].phone} />
                        </div>
                        <textarea placeholder={t[aLang].message}></textarea>
                        <button type='submit' className='btn'>{t[aLang].submit}</button>
                    </form>
                </div>
            </section>

            {/* Contact Info */}
            <section id="info">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.31561337505!2d-74.26055342157098!3d40.69714775414873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zTnl1LVlvcmssIE55dSBZb3JrLCBBbWVyaWthIEJpcmzJmcWfbWnFnyDFnnRhdGxhcsSx!5e0!3m2!1saz!2s!4v1670137700694!5m2!1saz!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="info">
                    <ul>
                        <li><span><i className="fa-solid fa-map-location-dot"></i></span>
                            <div>
                                <h6>{t[aLang].address}</h6>
                                <p> 59 Street, Newyork City, Rose Town, 05 Rive House</p>
                            </div>
                        </li>
                        <li><span><i className="fa-solid fa-phone-volume"></i></span>
                            <div>
                                <h6>{t[aLang].phone}</h6>
                                <p>  +123 456 7890</p>
                            </div>
                        </li>
                        <li><span><i className="fa-solid fa-envelope-open-text"></i></span>
                            <div>
                                <h6>{t[aLang].email}</h6>
                                <p> info@example.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
const t = a => a
export default connect(t)(Contact)