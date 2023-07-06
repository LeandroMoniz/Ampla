import { FooterStyles } from "./FooterStyles";

//IMG
import logo from "../../assets/img/Logo_Black.png"


const footer = () => {
    return (
        <FooterStyles>
            <div className="rect1">
                <img src={logo} alt="" />
                <h1>Informação</h1>
                <h2>Email: contato@amplaengonomia.com.br</h2>
                <span>+55 (19) 99999-5555</span>

            </div>
            <div className="rect2">

            </div>
        </FooterStyles>
    )
};

export default footer 