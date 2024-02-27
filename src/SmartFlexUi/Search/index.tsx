import React, { ReactNode, CSSProperties } from 'react';
import "./Search.css";

type Searchrops = {
    text?: string,
    subtitle?: string,
    body?: string,
    children?: ReactNode;
    style?: CSSProperties;
    buttonTitle?: string;
}

export const Search: React.FC<Searchrops> = ({ text, subtitle, body, children, style, buttonTitle, ...rest }) => {

    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder={text} aria-label={text} />
            <button className="btn btn-outline-secondary" type="button" id="button-search">
                <i className="bi bi-search"></i>
            </button>
        </div>
    )
}