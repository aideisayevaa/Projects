import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
function Basket({ products, basket, dispatch, aLang, t }) {
    const increaseCount = (id) => {
        const element = basket.find((a) => a.id === id);
        element.count++;
        dispatch({
            type: "SET_BASKET",
            payload: [...basket],
        });
    };
    const decreaseCount = (id) => {
        const element = basket.find((a) => a.id === id);
        element.count--;
        if (!element.count) {
            dispatch({
                type: "SET_BASKET",
                payload: [...basket.filter((a) => a.id !== id)],
            });
            return;
        }
        dispatch({
            type: "SET_BASKET",
            payload: [...basket],
        });
    };
    const deleteBasket = (id) => {
        dispatch({
            type: "SET_BASKET",
            payload: [...basket.filter((a) => a.id !== id)],
        });
    }
    const total = basket.reduce((acc, item) => {
        let product = products.find((a) => a.id === item.id);
        return acc + (+item.count * +(product?.sale ? (product?.price - (product?.price * product?.sale / 100)).toFixed(2) : product?.price));
    }, 0);

    let titleTranslate = "title_" + aLang
    return (
        <>
            <div className="pt_80"></div>
            <Banner pageName={"Basket"} bannerBg={"http://themes.g5plus.net/april/wp-content/uploads/2017/08/page-title-01.jpg?id=2336"} />
            {/* <div className="container"> */}
            <table id="basket_table">
                <thead>
                    <tr>
                        <th>{t[aLang].productName}</th>
                        <th>{t[aLang].price}</th>
                        <th>{t[aLang].color}</th>
                        <th>{t[aLang].size}</th>
                        <th>{t[aLang].quantity}</th>
                        <th>{t[aLang].total}</th>
                    </tr>
                </thead>
                <tbody>
                    {basket.length ? (
                        products.length ? (
                            basket.map((a) => {
                                const product = products.find((t) => t.id === a.id);
                                return (
                                    <tr key={a.id} className="table_row">
                                        <td>
                                            <div className="close_basket" onClick={(id) => deleteBasket(a.id)}><button>X</button></div>
                                            <Link to={`/single/${product.id}`}>
                                                <img src={product.images[0]} alt="" />
                                                <h2>{product[titleTranslate]}</h2>
                                            </Link>
                                        </td>
                                        <td>
                                            <span>{product.sale ? (product.price - (product.price * product.sale / 100)).toFixed(2) : product.price}    {t[aLang].azn}</span>
                                        </td>
                                        <td>
                                            <ul className='single_color'>
                                                <li style={{ backgroundColor: product.colors[0] }}></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul className="single_size_element single_right_element" >
                                                <li>{product.size}</li>
                                            </ul>
                                        </td>
                                        <td >
                                            <div className="operations">
                                                <button onClick={() => decreaseCount(a.id)}>-</button>
                                                <h3>{a.count}</h3>
                                                <button onClick={() => increaseCount(a.id)}>+</button>
                                            </div>
                                        </td>
                                        <td>
                                            <span> {+a.count * +(product.sale ? (product.price - (product.price * product.sale / 100)).toFixed(2) : product.price)}    {t[aLang].azn}</span>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <h1>Loading</h1>
                        )
                    ) : (
                        <tr colspan={"4"}><td>Məhsul əlavə edilməyib...</td></tr>
                    )}
                </tbody>



            </table>
            <div className="line"></div>
            <div className="total">
                {t[aLang].total}  : <span> {total}   {t[aLang].azn}</span>
            </div>
            {/* </div> */}
        </>
    );
}
const t = (a) => a;
export default connect(t)(Basket);
