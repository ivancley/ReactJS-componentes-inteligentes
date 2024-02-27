import React, { ReactNode } from 'react';
import "./Input.css";

type InputProps = {
    type: "button" | "checkbox" | "date" | "email" | "hidden" | "number" | "password" | "text" | "select" | "integer" | "decimal" | "currency"
    id: string, 
    name: string, 
    value: any, 
    disable?: boolean, 
    readonly?: boolean,
    size?: number, 
    maxlength?: number, 
    selectValues?: any[],
    modal_id?: number,
    required?: boolean, 
    placeholder?: string, 
    help?: string,
    mask?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
}

export const Input: React.FC<InputProps> = (props) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        props.onChange(e);
    };

    const renderSelect = (): ReactNode => {
        return (
            <>
                <label htmlFor={props.id} className='form-label text-uppercase fw-light'>{props.name}</label>
                <select 
                    className="form-select" 
                    aria-label="select"
                    id={props.id}
                    name={props.name}
                    value={props.value}
                    onChange={handleInputChange}
                >
                    {props.selectValues?.map((obj: any) => (
                        <option key={obj.id} value={obj.id}>{obj.value}</option>
                    ))}
                </select>
            </>
        )
    }

    const renderInputNumber = (type: string) => {
        return (
            <>
                <label htmlFor={props.id} className='form-label text-uppercase fw-light'> {props.name} </label>
                <div className='input-group'>
                    {   
                        type==="currency" &&
                            <span className='input-group-text h-75' >R$</span>
                    }
                    <input 
                        id={props.id}
                        name={props.name}
                        type="text" 
                        className='form-control text-end' 
                        disabled={props.disable}
                        value={
                            (type === "currency" || type === "decimal") ? 
                                props.value.toLocaleString('pt-br', {minimumFractionDigits: 2}):
                                props.value
                        }
                        onChange={handleInputChange} 
                        data-mask={props.mask}
                    >
                    </input>
                </div>
            </>
        )
    }

    const renderInput = (): ReactNode =>{
        if(props.type === "select"){
            return (renderSelect())
        } else if(props.type === "decimal"){
            return (renderInputNumber("decimal"))
        } else if(props.type === "currency"){
            return (renderInputNumber("currency"))
        } else if(props.type === "integer"){
            return (renderInputNumber("integer"))
        }else{
            return (
                <>
                    <label htmlFor={props.id} className='form-label text-uppercase fw-light'> {props.name} </label>
                    <input 
                        id={props.id}
                        name={props.name}
                        type={props.type} 
                        className='form-control' 
                        data-mask={props.mask}
                        //placeholder={props.field} 
                        //maxLength={props.maxLength} 
                        disabled={props.disable}
                        value={props.value} 
                        onChange={handleInputChange} >
                    </input>
                </>
            )
        }
    }

    const renderHelp = () => {
        return <div className='form-text help'>{props.help}</div>
    }
    
    return (
        <div className={`col col-${props.size} text-start`}>
            {renderInput()}
            {renderHelp()}
        </div>
    )
}