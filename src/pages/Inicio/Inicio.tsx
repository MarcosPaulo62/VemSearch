import { Button } from "../../components/Button/Button";
import { CardBackground } from "../../components/CardBackground/CardBackground";
import logo from "../../assets/logo.png"
import { InicioStyle } from "./style";

export function Inicio() {
    return (
        <>
            <CardBackground>
                    <Button width={"130px"} color={"var(--off-white)"} border={"2px solid var(--brand-2)"} backgroundColor={"transparent"}>sobre nós</Button>
                <InicioStyle>
                    <img className="imgLogo-inicio" src={logo} alt="Logo VemSearch application" />
                    <h1>Conectamos nossos usuários por todo país!</h1>
                    <Button backgroundColor="var(--brand-2)" border="none" color="var(--black-85)" width="320px">iniciar a busca!</Button>
                </InicioStyle>
            </CardBackground>
        </>
    )
}