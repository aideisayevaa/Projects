import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';
import { connect } from 'react-redux';

function ProductModal({ categories, subcategories, setOpenProductModal, product, aLang, t }) {
    const findCat = categories.find((a) => a.id === product.category_id).name
    const findSubCat = subcategories.find((a) => a.id === product.subcategory_id).name
    let titleTranslate = "title_" + aLang
    return (
        <div className="modal_container">
            <section id="single_product">
                <div className="single_product">

                    <div className="single_left"    >
                        <div className="single_img">
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                modules={[Pagination, Navigation]}
                                pagination={{ clickable: true }}
                                navigation
                            >
                                {product.images.map(img =>
                                    <SwiperSlide> <img src={img} alt="" /></SwiperSlide>
                                )}
                            </Swiper>

                            <div className="single_controlls">
                                <button><i className="fa-solid fa-chevron-right"></i></button>
                                <button><i className="fa-solid fa-chevron-left"></i></button>
                            </div>
                        </div>
                        <ul className='single_sub_img'>
                            {product.images.map(img =>
                                <li><img src={img} alt="" /></li>
                            )}
                        </ul>
                    </div>
                    <div className="single_right">
                        <div onClick={() => setOpenProductModal(false)} className='close_basket'><button>X</button></div>
                        <h4>{product[titleTranslate]}</h4>
                        <h5>Price:    {t[aLang].azn}{product.price}</h5>
                        <ul className='single_status'>
                            <li><b>Availability :</b><span>{product.stock ? "In Stock" : "Not Stock"}</span></li>
                            <li><b>Category :</b> <span>{findCat}</span></li>
                            <li><b>Subcategory : </b> <span>{findSubCat}</span></li>
                        </ul>
                        <div className='single_right_element'>Share:
                            <ul className='single_socials'>
                                <li><i className="fa-brands fa-facebook-f"></i></li>
                                <li><i className="fa-brands fa-instagram"></i></li>
                                <li><i className="fa-brands fa-twitter"></i></li>
                                <li><i className="fa-brands fa-google"></i></li>
                                <li><i className="fa-brands fa-pinterest"></i></li>
                            </ul>
                        </div>
                        <hr />
                        <div className='single_right_element single_color_element'>Color:
                            <ul className='single_color'>
                                {product.colors.map((color) =>
                                    <li style={{ backgroundColor: color }}></li>
                                )}

                                {/* <li style={{ backgroundColor: "red" }}></li> */}
                            </ul>
                        </div>
                        <div className='single_right_element single_size_element'>
                            Size:
                            <ul>
                                {product.size.map((size) =>
                                    <li>{size}</li>
                                )}
                            </ul>
                        </div>

                        {/* <div className="quantity">
                            <span>+</span>
                            <input type="number" value={1} />
                            <span>-</span>
                        </div> */}
                        <div className='single_to_cart'>
                            <div className="num-in">
                                <span className="minus dis"></span>
                                <input type="text" className="in-num" value="1" readOnly />
                                <span className="plus"></span>
                            </div>
                            <button className='view-cart'>Add To Card</button>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    )
}
const t = (a) => a
export default connect(t)(ProductModal)