import React from 'react';
import "./Button.css";

type ButtonLinkProps = {
    title?: string,
    color?: "primary" |  "secondary" | "success" | "danger" | "warning" | "infolight" | "dark" | "link";
    outline?: boolean;
    big?: boolean;
    small?: boolean;
    onClick?: () => void;
}

export const ButtonLink: React.FC<ButtonLinkProps> = (props) => {
    const outlineClass = props.outline ? 'btn btn-outline-' : 'btn btn-';
    const color = (props.color) ?  outlineClass + props.color : outlineClass + "primary"
    const big = props.big ? " btn-lg" : ""
    const small = props.small ? " btn-sm" : ""
    const cssClass = color + big + small

    return (
        <a 
            className={cssClass} 
            onClick={props.onClick}>
                {props.title}
        </a>
    )
}