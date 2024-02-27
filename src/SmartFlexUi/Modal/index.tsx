import React from 'react';
import "./Modal.css";
import { Form } from '../Form/Form';

type ModalProps = {
    title?: string,
    buttons: any[],
    id: number,  
    object: any, 
    model: any, 
    form_method: "post" | "get"
    formLines: any[],
    onClick?: () => void;
}

export const Modal: React.FC<ModalProps> = (props) => {

    return (
        <div className="modal fade" tabIndex={-1} id={`Modal_${props.id}`}>
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.object.nome}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Form onFieldChange method={props.form_method} formLines={props.formLines} object={props.object} model={props.model} buttons={props.buttons}/>
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    )
}