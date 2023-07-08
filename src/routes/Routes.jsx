import { Routes as RoutesDom, Route } from 'react-router-dom';
import React, { useState } from "react";

//Pages
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
import Home from '../Pages/Home/Home';
import MenuMobile from '../assets/Components/MenuMobile/MenuMobile'

function Routes() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    return (
        <>
            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
            <Header setMenuIsVisible={setMenuIsVisible} />
            <RoutesDom>
                <Route element={<Home />} path="/" />
            </RoutesDom>
            <Footer />
        </>
    );
};

export default Routes;