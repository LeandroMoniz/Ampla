import { FooterStyles } from "./FooterStyles";

//IMG
import logo from "../../assets/img/logo-footer.png"

import Facebook from "../../assets/img/logos_facebook.svg"
import Instagram from "../../assets/img/skill-icons_instagram.svg"
import LinkedIn from "../../assets/img/skill-icons_linkedin.svg"


const footer = () => {
    return (
        <FooterStyles>
            <footer className="flex-container">
                <figure className="img">
                    <img src={logo} alt="logo da ampla" />
                </figure>
                <section className="fullInfo">
                    <h1 className="info">Informação</h1>
                    <p className="email">Email: contato@amplaengonomia.com.br</p>
                    <p className="phone">+55 (19) 99999-5555</p>
                    <p className="phone">+55 (19) 99999-5555</p>
                </section>
                <section className="rede">
                    <h1>SIGA-NOS</h1>
                    {/* <h2 className="sociais">Redes Sociais</h2> */}
                    <p className="tex">Confira nossas redes sociais e fique <br /> por dentro de todas as novidades</p>
                    <figure className="social-media">
                        <a href="https://www.facebook.com/siimoniz" target="blank" rel="noreferrer">
                            <img src={Facebook} alt="logo e botão Facebook" />
                        </a>
                        <a href="https://www.instagram.com/siimoniz/?hl=pt-br/" target="blank" rel="noreferrer">
                            <img src={Instagram} alt="logo e botão Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/in/leandrogalhardomoniz/" target="blank" rel="noreferrer">
                            <img src={LinkedIn} alt="logo e botão Facebook" />
                        </a>
                    </figure>
                </section>
            </footer>
            <div className="bass">

            </div>
        </FooterStyles>
    )
};

export default footer 