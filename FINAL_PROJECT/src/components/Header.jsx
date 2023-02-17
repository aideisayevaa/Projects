import { useState } from "react"
import { connect } from "react-redux"

import { Link, NavLink } from 'react-router-dom'
import BasketModal from "./BasketModal"

function Header({ basket, favorite, t, aLang, dispatch }) {
    const [openSearch, setOpenSearch] = useState(false)
    // const [openFlag, setOpenFlag] = useState(false)
    const [openBasket, setOpenBasket] = useState(false)
    return (
        <>
            {/* data-aos="fade-down" */}
            <header >
                <div className="container">
                    <div className="header">
                        <div className="header-left">
                            <select onChange={(e) => {
                                dispatch({
                                    type: "LANGUAGE",
                                    payload: e.target.value,
                                });
                            }}
                                value={aLang}>
                                <option value="az">AZ</option>
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                            </select>
                            {/* <ul className="flags" onClick={() => setOpenFlag(!openFlag)}>
                                <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1200px-Flag_of_Azerbaijan.svg.png" alt="" /></li>
                                {openFlag && <ul>
                                    <li><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png" alt="" /></li>
                                    <li><img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png" alt="" /></li>
                                </ul>}
                            </ul> */}
                            {/* <span onClick={() => setOpenSearch(!openSearch)}><i className="fa-solid fa-magnifying-glass"></i></span> */}
                            {/* {openSearch && <input type="text" className="search" placeholder="Search Product..." />} */}
                        </div>
                        <nav>
                            <ul>
                                <li><NavLink to="/">{t[aLang].home}</NavLink></li>
                                <li><NavLink to="/shop">{t[aLang].shop}</NavLink></li>
                                <li><NavLink to="/about">{t[aLang].about}</NavLink></li>
                                <li className="logo">april<span>.</span></li>
                                {/* <li><NavLink to="/404">404</NavLink></li> */}
                                <li><NavLink to="/faqs">{t[aLang].faqs}</NavLink></li>
                                <li><NavLink to="/contact">{t[aLang].contact}</NavLink></li>
                            </ul>
                        </nav>
                        <div className="header-right">
                            <span><Link to="/fav"><i className="fa-regular fa-heart"></i>
                                <div className="like-count">{favorite ? favorite.length : 0}</div></Link>
                            </span>
                            <span onClick={() => setOpenBasket(!openBasket)}><i className="fa-solid fa-cart-shopping"></i>
                                <div className="basket-count">{basket ? basket.length : 0}</div>
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {openBasket && <BasketModal setOpenBasket={setOpenBasket} />}
        </>
    )
}
const t = a => a
export default connect(t)(Header)