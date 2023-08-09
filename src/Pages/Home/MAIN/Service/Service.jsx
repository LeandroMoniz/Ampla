import Button from "../../../../assets/Components/Button/Button";
import SectionTitle from "../../../../assets/Components/SectionTitle/SectionTitle";
import { ServiceStyles } from "./ServiceStyles";
import { Link } from "react-router-dom";
import { useEffect } from "react";

//Photos
import esticando from "../../../../assets/img/homem-esticando.jpg"
import escritorio from "../../../../assets/img/homem-no-escritorio.jpg"
import reuniao from "../../../../assets/img/vista-superior-.jpg"

const Service = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <ServiceStyles>
            <SectionTitle subTitle={"Um pouco mais sobre os nossos serviços"} Title={"Serviços"} />
            <div className="container">
                <div className="box">
                    <img src={reuniao} alt="reunião" />
                    <h2>Avaliação Ergonômica Preliminar (AEP)</h2>
                    <Button>
                        <Link to="/aep">Saiba Mais</Link>
                    </Button>
                </div>
                <div className="box">
                    <img src={esticando} alt="homem esticando" />
                    <h2>Análise Ergonômica do Trabalho (AET)</h2>
                    <Button >
                        <Link to="/aet">Saiba Mais</Link>
                    </Button>
                </div>
                <div className="box">
                    <img src={escritorio} alt="homem esticando" />
                    <h2>Gestão em Ergonomia</h2>
                    <Button >
                        <Link to="/gestão">Saiba Mais</Link>
                    </Button>
                </div>
                <div className="box">
                    <img src={escritorio} alt="homem esticando" />
                    <h2>Ergonomia no Home Office</h2>
                    <Button >
                        <Link to="/ergonomiaHome">Saiba Mais</Link>
                    </Button>
                </div>
                <div className="box">
                    <img src={reuniao} alt="reunião" />
                    <h2>Blitz Postural</h2>
                    <Button >
                        <Link to="/blitz">Saiba Mais</Link>
                    </Button>
                </div>
                <div className="box">
                    <img src={esticando} alt="homem esticando" />
                    <h2>Assistência Técnica em Perícias Judiciais Trabalhistas</h2>
                    <Button >
                        <Link to="/assistência">Saiba Mais</Link>
                    </Button>
                </div>
            </div>
        </ServiceStyles>
    );
};

export default Service