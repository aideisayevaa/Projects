import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useParams } from "react-router-dom";
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';
import { connect } from 'react-redux';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { FreeMode, Thumbs } from "swiper";

function SinglePage({ categories, subcategories, aLang, t, dispatch, basket }) {
    let { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true)
    const [singleCount, setSingleCount] = useState(1)
    useEffect(() => {
        const getData = async () => {
            let data = await fetch(`http://localhost:2407/products/${id}`).then((a) =>
                a.json()
            );
            setProduct(data);
            setLoading(false)
        };
        getData();
    }, []);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    let titleTranslate = "title_" + aLang
    const addBasket = (id, singleCount) => {
        dispatch({
            type: "SET_BASKET",
            payload: [...basket, { id: id, count: singleCount, size: "Msadasd" }],
        });
    };
    return (
        <>

            {loading ? <>
                <h1>LOADING ...</h1>
            </> : <>
                <div className="pt_80"></div>
                <section id="single_product">
                    <div className="container">
                        <div className="single_product">
                            <div className="single_left"    >
                                <div className="single_img">
                                    <Swiper
                                        style={{
                                            "--swiper-navigation-color": "#fff",
                                            "--swiper-pagination-color": "#fff",
                                        }}
                                        loop={true}
                                        spaceBetween={10}
                                        navigation={true}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper2"
                                    >
                                        {product.images?.map(img =>
                                            <SwiperSlide> <img key={img} src={img} alt="" /></SwiperSlide>
                                        )}
                                    </Swiper>
                                </div>
                                <div className="single_sub_img">
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        // loop={true}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper"
                                    >
                                        {product.images?.map(img =>
                                            <SwiperSlide> <img key={img} src={img} alt="" /></SwiperSlide>
                                        )}

                                    </Swiper>


                                </div>
                            </div>
                            <div className="single_right">
                                <h4>{product[titleTranslate]}</h4>
                                <h5>Price: {product.price}   {t[aLang].azn}</h5>
                                <ul className='single_status'>
                                    <li><b>Availability :</b><span>{product.stock ? "In Stock" : "Not Stock"}</span></li>
                                    <li><b>Category :</b> <span>{categories.find((a) => a.id === product.category_id)?.name}</span></li>
                                    <li><b>Subcategory : </b> <span>{subcategories.find((a) => a.id === product.subcategory_id)?.name}</span></li>
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

                                <div className='single_to_cart'>
                                    <div className="single__count">
                                        <button onClick={() => singleCount > 1 && setSingleCount(singleCount - 1)}><i className="fa-solid fa-minus"></i></button>
                                        <input type="text" value={singleCount} readOnly />
                                        <button onClick={() => setSingleCount(singleCount + 1)}><i class="fa-solid fa-plus"></i></button>
                                    </div>
                                    <button onClick={() => addBasket(product.id, singleCount)} className='view-cart'>Add To Card</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
                <div className="container">
                    <div className="product-desc">
                        <h3>Description</h3>
                        <div></div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sint aperiam itaque non praesentium sunt voluptate voluptates porro laborum debitis corrupti dolorem at nemo dolorum nisi, cupiditate dolores sit nulla aliquam inventore necessitatibus iusto illum alias? Repudiandae, quidem. Adipisci culpa veniam repudiandae quos dolores? Doloribus iusto est exercitationem temporibus dolorum nostrum veniam odio architecto fuga incidunt. Repudiandae temporibus enim ullam aut delectus qui veritatis dolorem officia voluptatem doloremque sit atque nulla id, iure nihil. Eligendi neque rerum corrupti architecto ducimus. In quia adipisci mollitia odit eaque totam deserunt ullam impedit! Eos velit dolores quod vel, maxime libero. Reiciendis, ducimus reprehenderit. Tempore tempora, dolores asperiores natus possimus numquam sit molestias atque excepturi in repellat veritatis! Illum amet aspernatur aliquid velit quae atque quaerat labore nihil illo, saepe ipsa, temporibus adipisci at animi. Unde fugiat ipsam repudiandae harum quam ullam maiores, doloribus iure consectetur ipsa sapiente voluptatum sequi recusandae dolorum, eum obcaecati, nemo minus beatae asperiores nisi facere tenetur praesentium laudantium autem? Assumenda, perspiciatis. Nemo harum perferendis aliquid rerum alias itaque! Corporis fugit accusamus reiciendis rem fugiat ut cupiditate temporibus doloribus? Laudantium itaque laboriosam porro, beatae dolorem sed aperiam odio cum ab impedit nobis officiis explicabo labore architecto iure quod nemo voluptates?</p>
                    </div>
                </div>
            </>
            }

        </>

    );
}
const t = (a) => a
export default connect(t)(SinglePage)