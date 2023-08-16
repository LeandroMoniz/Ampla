import { DescriptionStyles } from "./DescriptionStyles";
//IMG
import logo from "../../../../assets/img/logo_ampla.png";

const Description = () => {
    return (
        <DescriptionStyles>
            <main>
                <section >
                    <span>A Ampla Ergonomia é uma empresa de consultoria especializada em fornecer soluções ergonômicas para empresas de diversos setores. Nosso objetivo é criar ambientes de trabalho saudáveis, seguros e produtivos, focando no bem-estar dos colaboradores e no sucesso das organizações.</span>
                    <img src={logo} alt="logo da ampla" />
                </section>
            </main>
        </DescriptionStyles>
    );
};

export default Description;