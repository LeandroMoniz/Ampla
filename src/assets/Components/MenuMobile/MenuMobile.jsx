import React from "react";

import { MenuMobileStyle } from "./MenuMobileStyle";

import {
    IoClose,
    IoHome,
    IoPersonCircle,
    IoGitBranch,
    IoMail,
} from "react-icons/io5";

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
    return (
        <MenuMobileStyle isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() => setMenuIsVisible(false)} />

            <nav>
                <a href="#home" onClick={() => setMenuIsVisible(false)}>
                    <span>
                        <IoHome /> Home
                    </span>
                </a>

                <a href="#about" onClick={() => setMenuIsVisible(false)}>
                    <span>
                        <IoPersonCircle /> Empresa
                    </span>
                </a>

                <a href="#projects" onClick={() => setMenuIsVisible(false)}>
                    <span>
                        <IoGitBranch /> Serviços
                    </span>
                </a>

                <a href="#contact" onClick={() => setMenuIsVisible(false)}>
                    <span>
                        <IoMail /> Contato
                    </span>
                </a>
            </nav>
        </MenuMobileStyle>
    );
};

export default MenuMobile;