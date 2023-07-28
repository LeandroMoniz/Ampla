import React from "react";
import { HeaderStyles } from "./HeaderStyles";
import { Link } from "react-router-dom"
import { IoMenu } from 'react-icons/io5'

//logo
import logo from "../../assets/img/amplaLogo.png"
import Whats from "../../assets/img/whatsapp.svg"

const Header = ({ setMenuIsVisible }) => {
    return (
        < HeaderStyles>
            <nav>
                <div className="nav-bar">
                    <div className="flex-container">
                        <div className="logo">
                            <img src={logo} alt="logo Ampla" />
                        </div>
                        <div className="link">
                            <Link To="/">Home</Link>
                            <Link To="/">A Empresa</Link>
                            <Link To="/about">Serviço</Link>
                            <Link To="/">Contato</Link>
                        </div>
                        <div className="whats">
                            <a href="https://web.whatsapp.com/send?phone=551992310000" >
                                <img src={Whats} alt="Logo WhatsApp" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="mobile_header">
                <img src={logo} alt="Mobile" />
                <IoMenu onClick={() => setMenuIsVisible(true)} className="mobile" size={35} />
            </div>
        </HeaderStyles>
    );
};

export default Header;