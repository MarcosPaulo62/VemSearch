import { styled } from "styled-components"

export const SobreContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const SobreDivCabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .link-sobre-logout{
        color: var(--off-white);
    }

    .span-logout{
        font-size: 2.3rem;
    }
`

export const SobreTextPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--off-white);

    h1{
        font-size: 52px;
    }
    h2{
        font-size: 36px;
    }
`

export const SobreSearch = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;

    input{
        width: 500px;
        border-radius: 8px;
        padding: 15px;
        border: none;
    }

    button > span{
        font-size: 2.5rem;
    }
`

export const SobreFooter = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .img-sobre-footer{
        width: 75px;
        height: 75px;
    }

    span{
        font-size: 2.3rem;
        color: var(--off-white);
    }
`


