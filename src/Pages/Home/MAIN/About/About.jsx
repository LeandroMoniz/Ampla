import SectionTitle from "../../../../assets/Components/SectionTitle/SectionTitle";
import { AboutStyles } from "./AboutStyles";
import { Link } from "react-router-dom"

import Button from '../../../../assets/Components/Button/Button'
import sobre from "../../../../assets/img/Img_about.png"

const About = () => {
    return (
        <AboutStyles>
            <SectionTitle subTitle={"Sobre"} />
            <section>
                <figure>
                    <img src={sobre} alt="" />
                </figure>
                <article>
                    <h2>EMPRESA</h2>
                    <span>Descubra a AMPLA Ergonomia! Promovemos bem-estar e saúde no trabalho, soluções ergonômicas personalizadas para empresas. Parceira confiável para um ambiente produtivo e seguro. Entre em contato e transforme sua empresa com nossos serviços especializados.</span>
                    <Link to="/about"><Button type="about">NOSSA HISTÓRIA</Button></Link>
                </article>
            </section>
        </AboutStyles>
    );
};

export default About;