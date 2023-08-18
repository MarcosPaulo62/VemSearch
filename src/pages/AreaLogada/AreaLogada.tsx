import { CardBackground } from "../../components/CardBackground/CardBackground";
import { Link, useNavigate } from 'react-router-dom';
import { SobreContainer, SobreDivCabecalho, SobreFooter, SobreSearch, SobreTextPrincipal } from "./styles";
import { Button } from "../../components/Button/Button";
import footerImage from "../../assets/footerImage.png"
import { set, useForm } from 'react-hook-form';
import { useState } from 'react';
import { IFormNome } from "../../utils/interface";



export function AreaLogada() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormNome>();
    const navigate = useNavigate();


    
    const onSubmit = (data: IFormNome) => {
        navigate(`/resultado-busca/${data.nome}`)
        console.log(data);
        reset();
    };


    const userLogado = localStorage.getItem("userLogado");

    function logout() {
        localStorage.removeItem("userLogado");
        localStorage.removeItem("token");
    }

    return (
        <CardBackground width="95vw">
            <SobreContainer>
                <SobreDivCabecalho>
                    <SobreTextPrincipal>
                        <h1>Olá, {userLogado}!</h1>
                        <h2>Quem você quer encontrar hoje?</h2>
                    </SobreTextPrincipal>
                    <Link className="link-sobre-logout" to={"/"} onClick={logout}>
                        <span className="material-symbols-rounded span-logout">logout</span>
                    </Link>
                </SobreDivCabecalho>
                <SobreSearch>



                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="busque por um nome" type="text" {...register("nome")} required />
                        <Button width={"74px"} color={""} border={"none"} backgroundColor={"var(--brand-2)"} ><span className="material-symbols-rounded">search</span></Button>
                    </form>



                </SobreSearch>
                <SobreFooter>
                    <Link to={"/"}>
                        <span className="material-symbols-rounded">home</span>
                    </Link>
                    <Link to={"/"}>
                        <img className="img-sobre-footer" src={footerImage} alt="Icon logo" />
                    </Link>
                    <Link to={"/sobre"}>
                        <span className="material-symbols-rounded">info</span>
                    </Link>
                </SobreFooter>
            </SobreContainer>
        </CardBackground>
    )
}