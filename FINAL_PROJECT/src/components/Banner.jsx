import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
function Banner({ bannerBg }) {
    const location = useLocation();
    const [pageName, setPageName] = useState("");

    useEffect(() => {
        setPageName(location.pathname.substring(1));
    }, [location.pathname]);

    return (
        <section id='banner'>
            <img src={bannerBg} className='banner-img' alt="" />
            <div className="container">
                <h3>{pageName}</h3>
                <p>
                    <span><Link to="/">Home</Link></span>
                    <span>/</span>
                    <span><Link to=''>{pageName}</Link></span>
                </p>
            </div>
        </section>
    )
}

export default Banner