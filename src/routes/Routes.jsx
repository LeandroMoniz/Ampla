import { Routes as RoutesDom, Route } from 'react-router-dom';
import React, { useState } from "react";

//Pages
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
import Home from '../Pages/Home/Home';
import MenuMobile from '../assets/Components/MenuMobile/MenuMobile'
import About from '../Pages/About/About';
import Contact from '../Pages/Home/MAIN/Contact/Contact';
import Service from '../Pages/Home/MAIN/Service/Service';
//Pages Servico
import Servico from '../Pages/Servico/Servico';
import ServicoTwo from '../Pages/Servico/ServicoTwo';
import ServicoThree from '../Pages/Servico/ServicoThree';
import ServicoFour from '../Pages/Servico/ServicoFour';
import ServicoFive from '../Pages/Servico/ServicoFive';
import ServicoSix from '../Pages/Servico/ServicoSix';

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
                <Route element={<Service />} path="/servico" />
                <Route element={<Contact />} path="/contato" />
                <Route element={<Servico />} path='/aep' />
                <Route element={<ServicoTwo />} path='/aet' />
                <Route element={<ServicoThree />} path='/gestão' />
                <Route element={<ServicoFour />} path='/ergonomiaHome' />
                <Route element={<ServicoFive />} path='/blitz' />
                <Route element={<ServicoSix />} path='/assistência' />
            </RoutesDom>
            <Footer />
        </>
    );
};

export default Routes;