import { HomeStyles } from "./HomeStyles";

//Pages
import Description from "./MAIN/Description/Description";
import Contact from "./MAIN/Contact/Contact";
import About from "./MAIN/About/About";
import Service from "./MAIN/Service/Service";

const Home = () => {

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