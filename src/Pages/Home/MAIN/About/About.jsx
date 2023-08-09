import SectionTitle from "../../../../assets/Components/SectionTitle/SectionTitle";
import { AboutStyles } from "./AboutStyles";
import { Link } from "react-router-dom"

import Button from '../../../../assets/Components/Button/Button'
import sobre from "../../../../assets/img/sobre.jpg"

const About = () => {
    return (
        <AboutStyles>
            <SectionTitle subTitle={"Um pouco sobre a empresa"} Title={"Sobre"} />
            <div className="about">
                <div className="img">
                    <img src={sobre} alt="" />
                </div>
                <div className="info">
                    <h2>EMPRESA</h2>
                    <span>A Ampla Ergonomia oferece soluções ergonômicas personalizadas para melhorar a produtividade e o bem-estar no ambiente de trabalho. Realizamos avaliações detalhadas, projetamos espaços e mobiliário ergonomicamente corretos, oferecemos treinamentos abrangentes, realizamos análises de tarefas e processos e fornecemos recomendações de equipamentos. Nosso objetivo é criar ambientes de trabalho seguros, saudáveis e eficientes, onde os funcionários possam prosperar e alcançar seu máximo potencial.</span>
                    <Link to="/about"><Button type="about">LEIA MAIS</Button></Link>
                </div>
            </div>
        </AboutStyles>
    );
};

export default About;