import React, { ReactNode, CSSProperties } from 'react';
import "./Card.css";
import { Button } from '../Button';

type CardProps = {
    title?: string,
    subtitle?: string,
    body?: string,
    children?: ReactNode;
    style?: CSSProperties;
    buttonTitle?: string;
}

export const Card: React.FC<CardProps> = ({ title, subtitle, body, children, style, buttonTitle, ...rest }) => {
    const cssClass = "card";

    const buttonCard = () => {
        if(buttonTitle){
            return <div className='col text-end'><Button title={buttonTitle} small /></div>
        }else{
            return <div className='col text-end'></div>
        }
    }

    return (
        <div className={cssClass} style={{ ...style, ...rest }}>
            <div className="card-header">
                <div className='row'>
                    <div className='col'>{title}</div>
                    { buttonCard() }
                </div>
                <div className="card-subtitle mb-2 text-body-secondary">{subtitle}</div>
            </div>
            <div className="card-body">
            
            {children}
            </div>
        </div>
    )
}