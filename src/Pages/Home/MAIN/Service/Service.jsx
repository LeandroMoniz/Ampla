import Button from "../../../../assets/Components/Button/Button";
import SectionTitle from "../../../../assets/Components/SectionTitle/SectionTitle";
import { ServiceStyles } from "./ServiceStyles";
import { Link } from "react-router-dom";
import { useEffect } from "react";

//Photos
import AEP from "../../../../assets/img/AEP.jpg"
import AET from "../../../../assets/img/AET.jpg"
import GES from "../../../../assets/img/GESTÃO.jpg"
import EHO from "../../../../assets/img/HOME OFFICE.jpg"
import BPO from "../../../../assets/img/BLITZ POSTURAL.jpg"
import ATP from "../../../../assets/img/ASSITENCIA_TECNICA.jpg"

const Service = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <ServiceStyles>
            <SectionTitle subTitle={"Serviços"} />
            <div className="container">
                <div className="box">
                    <img src={AEP} alt="reunião" />
                    <h2>Avaliação Ergonômica Preliminar (AEP)</h2>
                    <Link to="/aep">
                        <Button>SAIBA MAIS</Button>
                    </Link>
                </div>
                <div className="box">
                    <img src={AET} alt="homem esticando" />
                    <h2>Análise Ergonômica do Trabalho (AET)</h2>
                    <Link to="/aet">
                        <Button >SAIBA MAIS</Button>
                    </Link>
                </div>
                <div className="box">
                    <img src={GES} alt="homem esticando" />
                    <h2>Gestão em Ergonomia</h2>
                    <Link to="/gestão">
                        <Button >SAIBA MAIS</Button>
                    </Link>
                </div>
                <div className="box">
                    <img src={EHO} alt="homem esticando" />
                    <h2>Ergonomia no Home Office</h2>
                    <Link to="/ergonomiaHome">
                        <Button >SAIBA MAIS</Button>
                    </Link>
                </div>
                <div className="box">
                    <img src={BPO} alt="reunião" />
                    <h2>Blitz Postural</h2>
                    <Link to="/blitz">
                        <Button >SAIBA MAIS</Button>
                    </Link>
                </div>
                <div className="box">
                    <img src={ATP} alt="homem esticando" />
                    <h2>Assistência Técnica em Perícias Judiciais Trabalhistas</h2>
                    <Link to="/assistência">
                        <Button >SAIBA MAIS</Button>
                    </Link>
                </div>
            </div>
        </ServiceStyles>
    );
};

export default Service