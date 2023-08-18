import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --brand-1: #5E17EB;
        --brand-1-hover: #39069e;

        --brand-2: #33D0A1;
        --brand-2-hover: #238A6B;

        --off-white: #d9d9d9;
        --white-15: rgba(226, 226, 226, 0.15);

        --black: #33d0a1;
        --black-85: rgba(51, 208, 161, 0.85);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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

`