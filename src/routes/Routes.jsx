import { Routes as RoutesDom, Route } from 'react-router-dom';
import React, { useState } from "react";

//Pages
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
import Home from '../Pages/Home/Home';
import MenuMobile from '../assets/Components/MenuMobile/MenuMobile'
import About from '../Pages/About/About';
import Contact from '../Pages/Home/MAIN/Contact/Contact';

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
                <Route element={<About />} path="/about" />
                <Route element={<Contact />} path="Contato" />
            </RoutesDom>
            <Footer />
        </>
    );
};

export default Routes;