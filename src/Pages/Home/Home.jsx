import { HomeStyles } from "./HomeStyles";

//Pages
import Description from "./MAIN/Description/Description";
import Contact from "./MAIN/Contact/Contact";
import About from "./MAIN/About/About";
import Service from "./MAIN/Service/Service";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <HomeStyles>
            <Description />
            <About />
            <Service />
            <Contact />
        </HomeStyles>

    )
};

export default Home