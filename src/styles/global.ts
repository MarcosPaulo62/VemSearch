import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --brand-1: #5E17EB;
        --brand-1-hover: #39069e;

        --brand-2: #33D0A1;
        --brand-2-hover: #3eb28b;

        --off-white: #d9d9d9;
        --white-15: rgba(226, 226, 226, 0.15);

        --black: #222222;
        --black-85: rgba(34, 34, 34, 0.85);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Antic', sans-serif;
    }

    body {
        background: linear-gradient(180deg, #5E17EB 0%, #6F5D91 100%);
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    a{
        text-decoration: none;
    }

`