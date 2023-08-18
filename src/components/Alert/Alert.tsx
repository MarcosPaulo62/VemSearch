import React from "react";
import { AlertProps, AlertStyled } from "./style";

interface IChildren extends AlertProps{
    children: React.ReactNode;
}

export function Alert({ children, backgroundColor }: IChildren){
    return(
        <AlertStyled backgroundColor={backgroundColor}>
            {children}
        </AlertStyled>
    )
}