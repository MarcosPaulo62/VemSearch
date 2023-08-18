import { Button } from "../../components/Button/Button";
import { CardBackground } from "../../components/CardBackground/CardBackground";
import logo from "../../assets/logo.png"
import { InicioDivButton, InicioStyle } from "./style";
import { Link } from 'react-router-dom';


export function Inicio(){
    return(
        <>
            <CardBackground width="60vw">
                <InicioDivButton>
                    <Link to={"/sobre"}>
                        <Button width={"130px"} color={"var(--off-white)"} border={"2px solid var(--brand-2)"} backgroundColor={"transparent"}>sobre nós</Button>
                    </Link>
                </InicioDivButton>
                <InicioStyle>
                    <img className="imgLogo-inicio" src={logo} alt="Logo VemSearch application" />
                    <h1 className="title-inicio">Conectamos nossos usuários por todo país!</h1>
                    <Link to={localStorage.getItem("token") ? "/area-logada" : '/login'}>
                        <Button backgroundColor="var(--brand-2)" border="none" color="var(--black-85)" width="320px">iniciar a busca!</Button>
                    </Link>
                </InicioStyle>
            </CardBackground>
        </>
    )
}