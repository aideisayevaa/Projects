import { connect } from "react-redux";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
function Favorite({ products, favorite, dispatch, basket, aLang, t }) {
    // const increaseCount = (id) => {
    //     const element = favorite.find((a) => a.id === id);
    //     element.count++;
    //     dispatch({
    //         type: "SET_FAVORITE",
    //         payload: [...favorite],
    //     });
    // };
    // const decreaseCount = (id) => {
    //     const element = favorite.find((a) => a.id === id);
    //     element.count--;
    //     if (!element.count) {
    //         dispatch({
    //             type: "SET_FAVORITE",
    //             payload: [...favorite.filter((a) => a.id !== id)],
    //         });
    //         return;
    //     }
    //     dispatch({
    //         type: "SET_FAVORITE",
    //         payload: [...favorite],
    //     });
    // };
    // const deleteFavorite = (id) => {
    //     dispatch({
    //         type: "SET_FAVORITE",
    //         payload: [...favorite.filter((a) => a.id !== id)],
    //     });
    // }
    const removeFavorite = (id) => {
        dispatch({
            type: "SET_FAVORITE",
            payload: [...favorite.filter((t) => t.id !== id)],
        });
    };

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
    let titleTranslate = "title_" + aLang
    return (
        <>
            <div className="pt_80"></div>
            <Banner pageName={"Favorite"} bannerBg={"http://themes.g5plus.net/april/wp-content/uploads/2017/08/page-title-01.jpg?id=2336"} />
            <div className="container">
                {/* <table id="basket_table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>UNIT PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favorite.length ? (
                            products.length ? (
                                favorite.map((a) => {
                                    const product = products.find((t) => t.id === a.id);
                                    return (
                                        <tr key={a.id} className="table_row">
                                            <td>
                                                <div className="close_basket" onClick={(id) => deleteFavorite(a.id)}><button>X</button></div>
                                                <img src={product.images[0]} alt="" />
                                                <h2>{product.title}</h2>
                                            </td>
                                            <td>
                                                <span>   {t[aLang].azn}{product.price}</span>
                                            </td>
                                            <td >
                                                <div className="operations">
                                                    <button onClick={() => decreaseCount(a.id)}>-</button>
                                                    <h3>{a.count}</h3>
                                                    <button onClick={() => increaseCount(a.id)}>+</button>
                                                </div>
                                            </td>
                                            <td>
                                                <span>   {t[aLang].azn}{a.count * product.price}</span>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <h1>Loading</h1>
                            )
                        ) : (
                            <tr colSpan={"4"}><td>Məhsul əlavə edilməyib...</td></tr>
                        )}
                    </tbody>









                </table> */}




                <section id="favorites">
                    <div className="heading">{t[aLang].favorites}</div>

                    <ul className='highlighted_products'>
                        {favorite.length ? (favorite.map(a => {
                            const product = products.find((t) => t.id === a.id);
                            const check = basket.find((t) => t.id === product?.id);
                            const checkFav = favorite.find((t) => t.id === product?.id);
                            return (
                                <li key={product?.id} >

                                    <Link to={`/single/${product?.id}`} >
                                        <img src={product?.images[0]} className="h_product_front" alt="" />
                                        <img src={product?.images[1]} className="h_product_back" alt="" />
                                    </Link>
                                    <div className='h_product_details'>
                                        <h3>{product && product[titleTranslate]}</h3>
                                        <span> {product?.price}   {t[aLang].azn}</span>

                                    </div>

                                    <ul className='product_icons' onClick={(e) => e.stopPropagation()}>
                                        <li><i onClick={() => {
                                            setOpenProductModal(true)
                                            setSelectedProduct(product)
                                        }} className="fa-solid fa-magnifying-glass-plus"></i></li>
                                        <li>  {check ? (
                                            <i onClick={() => removeBasket(product?.id)} className="fa-regular fa-square-minus"></i>

                                        ) : (
                                            <i onClick={() => addBasket(product?.id)} className="fa-solid fa-cart-plus"></i>
                                        )}</li>
                                        <li>  {checkFav ? (
                                            <i onClick={() => removeFavorite(product?.id)} className="fa-solid fa-heart-circle-check"></i>

                                        ) : (
                                            <i onClick={() => addFavorite(product?.id)} className="fa-regular fa-heart"></i>
                                        )}</li>
                                    </ul>

                                </li>
                            )
                        }
                        )
                        ) : (
                            <h1>Yoxdur</h1>
                        )}
                    </ul>

                </section>
            </div>

        </>
    );
}
const t = (a) => a;
export default connect(t)(Favorite);
