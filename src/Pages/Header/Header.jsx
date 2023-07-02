import React from "react";
import { HeaderStyles } from "./HeaderStyles";
import { Link } from "react-router-dom"

//logo
import logo from "../../assets/img/amplaLogo.png"
import Whats from "../../assets/img/akar-icons_whatsapp-fill.svg"

const Header = () => {
    return (
        < HeaderStyles>
            <nav>
                <img src={logo} alt="logo Ampla" />
                <div className="link">
                    <Link To="/">Home</Link>
                    <Link To="/">A Empresa</Link>
                    <Link To="/about">Serviço</Link>
                    <Link To="/">Contato</Link>
                </div>
                <a href="https://web.whatsapp.com/send?phone=551992310000" >
                    <img src={Whats} alt="Logo WhatsApp" />
                </a>

            </nav>
        </HeaderStyles>
    );
};

export default Header;