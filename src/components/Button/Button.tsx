import React from 'react';
import './Button.scss';

interface Props {
    variant?: string;
    children: React.ReactNode
}

function Button(props: Props) {
    const { variant = 'primary', children } = props;

    return (
        <button className={`button ${variant
        }`}>
            {children}
        </button>
    )
}

export default Button;
