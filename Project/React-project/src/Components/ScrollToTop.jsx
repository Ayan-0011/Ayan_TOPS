import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    return null;
};

export default ScrollToTop;
