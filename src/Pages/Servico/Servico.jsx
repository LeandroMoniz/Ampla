import { useEffect } from "react";
import { ServicoStyles } from "./ServicoStyle";

//IMG
import AEP from "../../assets/img/AEP.jpg"


const Servico = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <ServicoStyles>
            <main>
                <h1>Avaliação Ergonômica Preliminar (AEP)</h1>
                <div className="text">
                    <span>A Avaliação Ergonômica Preliminar (AEP) é uma avaliação inicial que busca identificar de forma geral os potenciais riscos e problemas ergonômicos em um determinado ambiente de trabalho.
                        <br />A partir de janeiro/2022 todas as empresas com funcionários em regime CLT, precisarão conter em seus documentos a Avaliação Ergonômica Preliminar.
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
                                x="31"
                                y="24"
                                xlinkHref={AEP}
                                alt="Minha foto."
                            />
                        </g>
                    </svg>
                </div>
            </main>
        </ServicoStyles>
    )
};

export default Servico