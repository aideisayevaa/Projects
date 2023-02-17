
function Footer() {
    return (
        <footer>
            {/* <img src={FooterBg} alt="" className="footer-bg" /> */}
            <div className="container">
                <ul className="footer">
                    <li className='footer-left'>
                        <div className="logo">april<span>.</span></div>
                        <ul>
                            <li><span><i className="fa-solid fa-map-location-dot"></i></span>
                                59 Street, Newyork City, Rose Town, 05 Rive House</li>
                            <li><span><i className="fa-solid fa-phone-volume"></i></span>
                                +123 456 7890</li>
                            <li><span><i className="fa-solid fa-envelope-open-text"></i></span>
                                info@example.com</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className="footer-heading">About April</li>
                            <li>About Us</li>
                            <li>Offices</li>
                            <li>Work with us</li>
                            <li>Our policies</li>
                            <li>Affinity Card</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className="footer-heading">Shopguide</li>
                            <li>Payments</li>
                            <li>Returns</li>
                            <li>Gift Card</li>
                            <li>Guest purchase</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </li>
                    <li>
                        <div className="footer-heading">Socials</div>
                        <ul className="footer-socials">
                            <li><i className="fa-brands fa-facebook-f"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-twitter"></i></li>
                            <li><i className="fa-brands fa-google"></i></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer