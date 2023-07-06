import { Routes as RoutesDom, Route } from 'react-router-dom';
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
import Home from '../Pages/Home/Home';

function Routes() {
    return (
        <>
            <Header />
            <RoutesDom>
                <Route element={<Home />} path="/" />
            </RoutesDom>
            <Footer />
        </>
    );
};

export default Routes;