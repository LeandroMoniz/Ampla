import { AboutStyles } from "./AboutStyles";
import { useEffect } from "react";

//img
import logo from "../../assets/img/logo_ampla.png";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <AboutStyles>
            <main>
                <h1> A Empresa</h1>
                <div className="text">
                    <span>A AMPLA Ergonomia é uma empresa fundada pela fisioterapeuta e especialista em Ergonomia Simone Moniz, com registro no CREFITO-3/245112-F. Nosso objetivo é promover o bem-estar e saúde para os trabalhadores, oferecendo soluções ergonômicas personalizadas para empresas de diversos segmentos.
                        <br />Trabalhamos em estreita colaboração com nossos clientes, compreendendo suas necessidades e desafios específicos, para fornecer soluções sob medida que atendam às suas demandas.
                        <br />Nossos serviços são baseados em abordagens científicas atualizadas, combinadas com as melhores práticas do campo da ergonomia.
                        <br />A AMPLA Ergonomia está pronta para ser sua parceira confiável na busca por um ambiente de trabalho mais saudável, seguro e produtivo. Entre em contato conosco e descubra como nossos serviços especializados podem contribuir para o sucesso e o bem-estar de sua empresa e colaboradores.
                    </span>
                    <img src={logo} alt="logo da ampla" />
                </div>
            </main>
        </AboutStyles>
    );

}

export default About