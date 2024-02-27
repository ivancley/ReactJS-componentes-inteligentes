import React, { ReactNode } from 'react';
import "./Button.css";

type ButtonProps = {
    title?: string,
    type?: "button" | "submit" | "reset",
    color?: "primary" |  "secondary" | "success" | "danger" | "warning" | "infolight" | "dark",
    outline?: boolean,
    big?: boolean,
    small?: boolean,
    disabled?: boolean,
    children?: ReactNode,
    modal_id?: number,
    onClick?: () => void | Promise<void>,
}

export const Button: React.FC<ButtonProps> = (props) => {
    const buttonType = props.type || 'button';
    const outlineClass = props.outline ? 'btn btn-outline-' : 'btn btn-';
    const color = props.color ?  outlineClass + props.color : outlineClass + "primary"
    const big = props.big ? " btn-lg" : ""
    const small = props.small ? " btn-sm" : ""
    const cssClass = color + big + small
    const isModalButton = props.modal_id !== undefined;

    const buttonProps = {
        className: cssClass,
        type: buttonType,
        disabled: props.disabled,
        onClick: props.onClick,
        ...(isModalButton && {
            'data-bs-toggle': 'modal',
            'data-bs-target': `#Modal_${props.modal_id}`, 
        }),
    };

    return (
        <button {...buttonProps}>
            {props.title}
            {props.children}
        </button>
    )
}