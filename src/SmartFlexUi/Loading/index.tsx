import React from 'react';
import { MoonLoader } from 'react-spinners';
import "./Loading.css";

type LoadingProps = {
    title?: string,
    subtitle?: string
}

export const Loading: React.FC<LoadingProps> = () => {

    const loaderStyle = {
        margin: '0 auto',
    };

    return (
        <div className="overlayStyle">
            <MoonLoader color="#0d6efd" loading={true} cssOverride={loaderStyle} />
        </div>
    );
};

