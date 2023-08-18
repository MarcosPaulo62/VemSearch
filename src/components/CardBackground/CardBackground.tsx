import React, { Children } from 'react';
import { CardBackgroundProps, CardBackgroundStyle } from './style';

interface Ichildren extends CardBackgroundProps{
    children: React.ReactNode;
}

export function CardBackground({children, width} : Ichildren) {
    return (
        <CardBackgroundStyle width={width}>{children}</CardBackgroundStyle>
    )
}