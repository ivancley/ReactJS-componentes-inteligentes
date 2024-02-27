import React, { ReactNode, CSSProperties } from 'react';
import "./Navbar.css";

type NavbarProps = {
    content_start?: string,
    content_center?: string,
}

export const Navbar: React.FC<NavbarProps> = ({ content_start, content_center, ...rest }) => {


    return (
        <div className='navbartop'>
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                    </div>
                </nav>
            </div>
        </div>
    )
}