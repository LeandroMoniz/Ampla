import React, { useEffect } from "react";
import { HeaderStyles } from "./HeaderStyles";
import { Link } from "react-router-dom"
import { IoMenu } from 'react-icons/io5'

//logo
import logo from "../../assets/img/logo-herder.png"
import Whats from "../../assets/img/whatsapp.svg"

const Header = ({ setMenuIsVisible }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        < HeaderStyles>
            <header>
                <section className="nav-bar">
                    <article className="flex-container">
                        <figure className="logo">
                            <img src={logo} alt="logo Ampla" />
                        </figure>
                        <nav className="link">
                            <Link to="/">Home</Link>
                            <Link to="/about">A Empresa</Link>
                            <Link to="/servico">Serviços</Link>
                            <Link to="/contato">Contato</Link>
                        </nav>
                        <figure className="whats">
                            <a href="https://web.whatsapp.com/send?phone=5519989310789" target="blank" rel="noreferrer"  >
                                <img src={Whats} alt="Logo WhatsApp" />
                            </a>
                        </figure>
                    </article>
                </section>
            </header>
            <figure className="mobile_header">
                <img src={logo} alt="Mobile" />
                <IoMenu onClick={() => setMenuIsVisible(true)} className="mobile" size={35} />
            </figure>
        </HeaderStyles>
    );
};

export default Header;