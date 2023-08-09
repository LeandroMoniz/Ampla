import React from "react";

import { MenuMobileStyle } from "./MenuMobileStyle";

import {
    IoClose,
    IoHome,
    IoPersonCircle,
    IoMail,
    IoLibraryOutline
} from "react-icons/io5";
import {
    ImWhatsapp
} from "react-icons/im"

import { Link } from "react-router-dom"

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
    return (
        <MenuMobileStyle isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() => setMenuIsVisible(false)} />

            <nav>
                <Link to="/" onClick={() => setMenuIsVisible(false)}>
                    <span>
                        <IoHome /> Home
                    </span>
                </Link>
                <Link to="/about" onClick={() => setMenuIsVisible(false)}>
                    <span>
                        <IoPersonCircle /> Empresa
                    </span>
                </Link>
                <Link to="/servico" onClick={() => setMenuIsVisible(false)}>
                    <span>
                        <IoLibraryOutline /> Serviços
                    </span>
                </Link>
                <Link to="/contato" onClick={() => setMenuIsVisible(false)}>
                    <span>
                        <IoMail /> Contato
                    </span>
                </Link>
                <a href="https://web.whatsapp.com/send?phone=5519989310789" onClick={() => setMenuIsVisible(false)}>
                    <span>
                        <ImWhatsapp /> WhatsApp
                    </span>
                </a>
            </nav>
        </MenuMobileStyle>
    );
};

export default MenuMobile;