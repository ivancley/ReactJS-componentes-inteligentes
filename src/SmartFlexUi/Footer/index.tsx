import React, { ReactNode, CSSProperties } from 'react';
import "./Footer.css";

type FooterProps = {
    title?: string,
    subtitle?: string,
    body?: string,
    children?: ReactNode;
    style?: CSSProperties;
    buttonTitle?: string;
}

export const Footer: React.FC<FooterProps> = ({ title, subtitle, body, children, style, buttonTitle, ...rest }) => {
    

    return (
      <div className='footer'>
        <div className="row">
          <div className='col text-start'>
            <p>Inicio</p>
          </div>
          <div className='col text-center'>
            <p>Meio</p>
          </div>
          <div className='col text-end'>
            <p>Fim</p>
          </div>
        </div>
      </div>
    )
}