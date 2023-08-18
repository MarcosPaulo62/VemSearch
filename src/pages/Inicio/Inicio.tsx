import { Button } from "../../components/Button/Button";
import { CardBackground } from "../../components/CardBackground/CardBackground";

export function Inicio(){
    return(
        <>
            <CardBackground>
                <Button fontSize="24px" width={"120px"} color={"var(--off-white)"} border={"2px solid var(--brand-2)"} backgroundColor={"transparent"}>sobre nós</Button>
            </CardBackground>
        </>
    )
}