import SectionTitle from "../../../../assets/Components/SectionTitle/SectionTitle";
import { AboutStyles } from "./AboutStyles";
import { Link } from "react-router-dom"

import Button from '../../../../assets/Components/Button/Button'
import sobre from "../../../../assets/img/Img_sobre.jpeg"

const About = () => {
    return (
        <AboutStyles>
            <SectionTitle subTitle={"Sobre"} />
            <section>
                <figure>
                    <svg className="home-blob" viewBox="0 0 200 200" >
                        <mask id="mask0" mask-type="alpha">
                            <path
                                fill="#A59FA8"
                                d="M56.8,-63.1C72.9,-54.2,84.6,-35.6,86.4,-16.5C88.3,2.6,80.3,22.1,67.9,35.1C55.5,48,38.8,54.4,23.5,56.5C8.2,58.5,-5.8,56.4,-23.2,54.2C-40.7,52,-61.7,49.9,-66.8,39.4C-71.8,28.9,-60.9,10,-53.2,-5.2C-45.5,-20.3,-41,-31.9,-32.6,-42.1C-24.3,-52.3,-12.1,-61.2,4.1,-66.1C20.4,-71,40.8,-72,56.8,-63.1Z"
                                transform="translate(100 100)"
                            />
                        </mask>
                        <g mask="url(#mask0)">
                            <path
                                d="M56.8,-63.1C72.9,-54.2,84.6,-35.6,86.4,-16.5C88.3,2.6,80.3,22.1,67.9,35.1C55.5,48,38.8,54.4,23.5,56.5C8.2,58.5,-5.8,56.4,-23.2,54.2C-40.7,52,-61.7,49.9,-66.8,39.4C-71.8,28.9,-60.9,10,-53.2,-5.2C-45.5,-20.3,-41,-31.9,-32.6,-42.1C-24.3,-52.3,-12.1,-61.2,4.1,-66.1C20.4,-71,40.8,-72,56.8,-63.1Z"
                                transform="translate(100 100)"
                            />
                            <image
                                className="home__blob-img"
                                x="31"
                                y="24"
                                xlinkHref={sobre}
                                alt="Mulher branca, loira, colete amarelo com tablet na mão, capacete branco e mão estendida "
                            />
                        </g>
                    </svg>
                </figure>
                <article>
                    <h2>A EMPRESA</h2>
                    <span>Descubra a Ampla Ergonomia! <br /> Promovemos bem-estar e saúde no trabalho, soluções ergonômicas personalizadas para empresas. Parceira confiável para um ambiente produtivo e seguro.<br /> Entre em contato e transforme sua empresa com nossos serviços especializados.</span>
                    <Link to="/about"><Button type="about">NOSSA HISTÓRIA</Button></Link>
                </article>
            </section>
        </AboutStyles>
    );
};

export default About;