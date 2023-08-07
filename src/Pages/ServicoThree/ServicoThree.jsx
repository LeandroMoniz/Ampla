import { useEffect } from "react";
import { ServicoThreeStyles } from "./ServicoThreeStyles";

import SectionTitle from "../../assets/Components/SectionTitle/SectionTitle";
import Reuniao from "../../assets/img/vista-superior-.jpg"


const ServicoThree = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <ServicoThreeStyles>
            <main>
                <SectionTitle subTitle={"Um pouco mais sobre os nossos serviços"} Title={"Serviços"} />
                <h1>Gestão em Ergonomia</h1>
                <div className="text">
                    <span>Trata-se de uma assessoria especializada, onde o profissional irá fornecer orientação e suporte na definição e implementação das estratégias adequadas às necessidades específicas da empresa.
                        <br />Ao adotar a Gestão, as empresas podem colher uma série de benefícios, como a redução de lesões ocupacionais, a melhoria do clima organizacional, o aumento da produtividade, a diminuição do absenteísmo e a retenção de talentos.
                    </span>
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
                                x="22"
                                y="18"
                                xlinkHref={Reuniao}
                                alt="Minha foto."
                            />
                        </g>
                    </svg>
                </div>
            </main>
        </ServicoThreeStyles>
    )
};

export default ServicoThree