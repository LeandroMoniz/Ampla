import { DescriptionStyles } from "./DescriptionStyles";

import logo from "../../../../assets/img/logoAmpla.png";

const Description = () => {
    return (
        <DescriptionStyles>
            <main>
                <div className="text">
                    <span>A Ampla Ergonomia é uma empresa de consultoria especializada em fornecer soluções ergonômicas para empresas de diversos setores. Nosso objetivo é criar ambientes de trabalho saudáveis, seguros e produtivos, focando no bem-estar dos colaboradores e no sucesso das organizações.</span>
                    <img src={logo} alt="logo da ampla" />
                </div>
            </main>

        </DescriptionStyles>

    );
};

export default Description;