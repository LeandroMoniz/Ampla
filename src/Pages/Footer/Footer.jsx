import { FooterStyles } from "./FooterStyles";

//IMG
import logo from "../../assets/img/Logo_Black.png"

import Facebook from "../../assets/img/logos_facebook.svg"
import Instagram from "../../assets/img/skill-icons_instagram.svg"
import LinkedIn from "../../assets/img/skill-icons_linkedin.svg"


const footer = () => {
    return (
        <FooterStyles>
            <div className="flex-container">
                <div className="img">
                    <img src={logo} alt="logo da ampla" />
                </div>
                <div className="fullInfo">
                    <h1 className="info">Informação</h1>
                    <p className="email">Email: contato@amplaengonomia.com.br</p>
                    <p className="phone">+55 (19) 99999-5555</p>
                    <p className="phone">+55 (19) 99999-5555</p>
                </div>
                <div className="rede">
                    <h1>SIGA-NOS</h1>
                    <h2 className="sociais">Redes Sociais</h2>
                    <p className="tex">Confira nossas redes sociais e fique <br /> por dentro de todas as novidades</p>
                    <a className="social-media" href="https://www.linkedin.com/in/leandrogalhardomoniz/" target="blank" rel="noreferrer">
                        <img src={Facebook} alt="logo e botão Facebook" />
                    </a>
                    <a href="https://www.linkedin.com/in/leandrogalhardomoniz/" target="blank" rel="noreferrer">
                        <img src={Instagram} alt="logo e botão Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/leandrogalhardomoniz/" target="blank" rel="noreferrer">
                        <img src={LinkedIn} alt="logo e botão Facebook" />
                    </a>
                </div>




            </div>
            <div className="bass">

            </div>
        </FooterStyles>
    )
};

export default footer 