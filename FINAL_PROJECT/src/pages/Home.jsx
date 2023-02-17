import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import Hero from '../components/Hero';
import { Autoplay, EffectFade } from "swiper";
// import { EffectFade } from 'swiper';
// import { Pagination } from 'swiper';
// import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css/effect-fade';
import "swiper/css/effect-creative";
import { useEffect, useState, useRef } from 'react'
import { EffectCreative, Navigation } from "swiper";
import '../App.css'
import "swiper/css/navigation";
import { connect } from 'react-redux'
import { motion, transform } from "framer-motion";
import Product from '../components/Product';
import ProductModal from '../components/ProductModal';
import { Link } from "react-router-dom";

function Home({ products, basket, dispatch, favorite, aLang, t }) {

    const [openProductModal, setOpenProductModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState({})
    const [heroSlide, setHeroSlide] = useState(1)
    const [selectedFilter, setSelectedFilter] = useState('all');

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    const filteredProducts =
        selectedFilter === 'all'
            ? products
            : products.filter((product) => product.status === selectedFilter);

    const addBasket = (id) => {
        dispatch({
            type: "SET_BASKET",
            payload: [...basket, { id: id, count: 1 }],
        });
    };
    const removeBasket = (id) => {
        dispatch({
            type: "SET_BASKET",
            payload: [...basket.filter((t) => t.id !== id)],
        });
    };

    const addFavorite = (id) => {
        dispatch({
            type: "SET_FAVORITE",
            payload: [...favorite, { id: id, count: 1 }],
        });
    };
    const removeFavorite = (id) => {
        dispatch({
            type: "SET_FAVORITE",
            payload: [...favorite.filter((t) => t.id !== id)],
        });
    };

    useEffect(() => {
        AOS.init();
    }, [])
    let titleTranslate = "title_" + aLang

    // let lengthWin = 700
    // let overlay = document.querySelector(".overlay")
    // let iLength = Math.floor(700 / 30)
    // for (let i = 0; i < iLength; i++) {
    //     let img = document.createElement("img")
    //     img.setAttribute("src", overlayArray[0])
    //     img.style.width = "30px";
    //     overlay.append(img)
    // }
    return (
        <>
            <div className="fixed__button">
                <a href="#hero"> <i className="fa-solid fa-chevron-up"></i></a>
            </div>

            {/* Hero */}
            <section id='hero' >
                <Swiper
                    navigation={true}
                    grabCursor={true}
                    speed={1400}
                    effect={"creative"}
                    loop={true}
                    creativeEffect={{
                        prev: {
                            origin: "left center",
                            translate: ["-5%", 0, -200],
                            rotate: [0, 100, 0],
                        },
                        next: {
                            origin: "right center",
                            translate: ["5%", 0, -200],
                            rotate: [0, -100, 0],
                        },
                    }}
                    autoplay={{
                        delay: 3500,
                    }}

                    modules={[Autoplay, EffectCreative, Navigation]}
                    className="mySwiper6"
                >
                    <SwiperSlide >
                        <img className='hero__bg' src="https://themes.g5plus.net/april/wp-content/uploads/revslider/slider-05/slider-20.jpg" alt="" />
                        <img className='hero__content' src="http://themes.g5plus.net/april/wp-content/uploads/revslider/slider-05/slider-22.png" alt="" />
                        <div className='hero__buttons'>
                            <button className="btn btn-learn">{t[aLang].learnMore}</button>
                            <button className="btn btn-shop">{t[aLang].shopNow}</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='hero__bg' src="http://themes.g5plus.net/april/wp-content/uploads/revslider/slider-05/slider-26.jpg" alt="" />
                        <img className='hero__content' src="http://themes.g5plus.net/april/wp-content/uploads/revslider/slider-05/slider-24.png" alt="" />
                        <div className='hero__buttons' >
                            <button className="btn btn-learn">{t[aLang].learnMore}</button>
                            <button className="btn btn-shop">{t[aLang].shopNow}</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='hero__bg' src="http://themes.g5plus.net/april/wp-content/uploads/revslider/slider-05/slider-27.jpg" alt="" />
                        <img className='hero__content' src="http://themes.g5plus.net/april/wp-content/uploads/revslider/slider-05/slider-25.png" alt="" />
                        <div className='hero__buttons'>
                            <button className="btn btn-shop">{t[aLang].shopNow}</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <ul className="socials" >
                    <li data-aos="fade-up"
                        data-aos-duration="800"><i className="fa-brands fa-facebook-f"></i><span>{t[aLang].facebook}</span></li>
                    <li data-aos="fade-up"
                        data-aos-duration="800"><i className="fa-brands fa-instagram"></i><span>{t[aLang].instagram}</span></li>
                    <li data-aos="fade-up"
                        data-aos-duration="800"><i className="fa-brands fa-twitter"></i><span>{t[aLang].twitter}</span></li>
                    <li className="socials-arrow"></li>
                </ul>
            </section>

            {/* Categories */}
            <section>
                <div className="container">
                    <div className="categories">
                        <div className="catItem " >
                            <div className="bigCat" >
                                <Link to={"/woman/all"}>
                                    <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/banner-16.jpg" alt="" />
                                    <button className="btn btn-shop">{t[aLang].forWoman}</button>
                                    <div className="overlay"></div>
                                </Link>
                            </div>
                            <div className="smallCat">
                                <Link to={"/category/3"}>
                                    <img src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=457&q=80" alt="" />
                                    <button className="btn btn-shop">{t[aLang].bagShop}</button>
                                    <div className="overlay"></div>
                                </Link>
                            </div>
                        </div>
                        <div className="catItem">
                            <div className="bigCat">
                                <Link to={"/kids/all"}>
                                    <img src="http://themes.g5plus.net/april/wp-content/uploads/revslider/slider%2003/slider-14.png" alt="" />
                                    <button className="btn btn-shop">{t[aLang].forKid}</button>
                                    <div className="overlay"></div>
                                </Link>
                            </div>
                            <div className="smallCat" style={{ border: "1px solid #D5D4D2" }}>
                                <Link to={'/shop'}>
                                    <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/banner_17.jpg" alt="" />
                                    <span>{t[aLang].shopNow}</span>
                                    <div className="overlay"></div>
                                </Link>
                            </div>
                        </div>
                        <div className="catItem">
                            <div className="bigCat">
                                <Link to={'/men/all'}>
                                    <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/banner_18.jpg" alt="" />
                                    <button className="btn btn-shop">{t[aLang].forMan}</button>
                                    <div className="overlay"></div>
                                </Link>
                            </div>
                            <div className="smallCat">
                                <Link to={"/category/1"}>
                                    <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                    <button className="btn btn-shop">{t[aLang].shoesShop}</button>
                                    <div className="overlay"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            {/* <ProductModal /> */}

            {/* Highlighted products*/}
            <section id='highlighted_products'>
                <div className="container">
                    <ul className='filter_butttons'>
                        <li onClick={() => handleFilterChange('all')}>{t[aLang].all}</li>
                        <li onClick={() => handleFilterChange('popular')}>{t[aLang].popular}</li>
                        <li onClick={() => handleFilterChange('brand')}>{t[aLang].brand}</li>
                        <li onClick={() => handleFilterChange('sale')}>{t[aLang].sale}</li>
                    </ul>
                    <ul className='highlighted_products'>
                        {filteredProducts.filter((a, b) => {
                            if (b < 8 && a.status) {
                                return a
                            }
                        }).map(product => {
                            const check = basket.find((t) => t.id === product.id);
                            const checkFav = favorite.find((t) => t.id === product.id);
                            return (

                                <li key={product.id} >
                                    {product.sale ? <div className="product__sale">{product.sale} %</div> : <div ></div>}
                                    <motion.section initial={{ opacity: 0, transform: "scale(0.9)" }} animate={{ opacity: 1, transform: "scale(1)" }} transition={{ duration: 0.4, property: "transform" }}>
                                        <Link to={`/single/${product.id}`} >
                                            <img src={product.images[0]} className="h_product_front" alt="" />
                                            <img src={product.images[1]} className="h_product_back" alt="" />
                                        </Link>
                                        <div className='h_product_details'>
                                            <h3>{product[titleTranslate]}</h3>
                                            <div>
                                                <span>{product.sale ? (product.price - (product.price * product.sale / 100)).toFixed(2) : product.price}   {t[aLang].azn}</span>
                                                {product.sale ? <span className='product__sale__price'>{product.price} {t[aLang].azn}</span> : <div ></div>}
                                            </div>
                                        </div>
                                    </motion.section>
                                    <ul className='product_icons' onClick={(e) => e.stopPropagation()}>
                                        <li><i onClick={() => {
                                            setOpenProductModal(true)
                                            setSelectedProduct(product)
                                        }} className="fa-solid fa-magnifying-glass-plus"></i></li>
                                        <li>  {check ? (
                                            <i onClick={() => removeBasket(product.id)} className="fa-regular fa-square-minus"></i>

                                        ) : (
                                            <i onClick={() => addBasket(product.id)} className="fa-solid fa-cart-plus"></i>
                                        )}</li>
                                        <li>  {checkFav ? (
                                            <i onClick={() => removeFavorite(product.id)} className="fa-solid fa-heart-circle-check"></i>

                                        ) : (
                                            <i onClick={() => addFavorite(product.id)} className="fa-regular fa-heart "></i>
                                        )}</li>
                                    </ul>

                                </li>

                            )
                        }
                        )}
                    </ul>
                </div>
            </section>
            {openProductModal && <ProductModal setOpenProductModal={setOpenProductModal} product={selectedProduct} />}

            {/* Sale Banner */}
            <section id="sale__banner">
                <Link to={"/sale"}>
                    <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/background-03.jpg" alt="" />
                    <div className="sale__banner__details">
                        <h3>{t[aLang].sale}</h3>
                        <span>#APRILSTORE</span>
                    </div>
                </Link>
            </section>

            {/* Instagram */}
            <section id="instagram">
                <div className="heading">{t[aLang].instagramGallery}</div>
                <ul className="posts">
                    <li>
                        <img src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/1_d6cce640-4c72-42c3-9060-4290d8e85972.jpg?v=1640579576" alt="" />
                        <div className="overlay-post"><i className="fa-brands fa-instagram"></i></div>
                    </li>
                    <li>
                        <img src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/3_36007b4b-a3f2-440d-9990-3f8647cf1724.jpg?v=1640579616" alt="" />
                        <div className="overlay-post"><i className="fa-brands fa-instagram"></i></div>
                    </li>
                    <li>
                        <img src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/4_c909ee0f-da5f-4e61-b032-1045b3fe0a49.jpg?v=1640579628" alt="" />
                        <div className="overlay-post"><i className="fa-brands fa-instagram"></i></div>
                    </li>
                    <li>
                        <img src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/5_9817980f-67d6-4b1f-bea4-3392899f50e0.jpg?v=1640579642" alt="" />
                        <div className="overlay-post"><i className="fa-brands fa-instagram"></i></div>
                    </li>
                    <li>
                        <img src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/1_d6cce640-4c72-42c3-9060-4290d8e85972.jpg?v=1640579576" alt="" />
                        <div className="overlay-post"><i className="fa-brands fa-instagram"></i></div>
                    </li>
                </ul>
            </section>



        </>
    )
}
const t = (a) => a;
export default connect(t)(Home)