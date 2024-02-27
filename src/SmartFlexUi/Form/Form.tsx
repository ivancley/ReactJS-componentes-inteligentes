import React, {ReactNode, useState } from 'react';
import "./Form.css";
import { Input } from '../Input';

type FormProps = {
    formLines: any[],
    object: any, 
    model: any,
    method: "post" | "get"
    children?: ReactNode;
    buttons: any[],
    onFieldChange: any
}

interface FormValues {
    [key: string]: any;
}

export const Form: React.FC<FormProps> = ({ formLines, object, model, buttons, method, children, onFieldChange, ...rest }) => {

    const [formValues, setFormValues] = useState<FormValues>({...object})

    const renderField = (fieldInfo: any, rowForm: number,  colIndex: number) => {
        const { id, field, disable, help, size } = fieldInfo;
        const value = formValues[field];
        
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const target = e.target as HTMLInputElement | HTMLSelectElement;
            const newValue = target instanceof HTMLInputElement && target.type === 'checkbox' ? target.checked : target.value;
            setFormValues(prevState => ({
                ...prevState,
                [field]: newValue
            }));
            onFieldChange(field, newValue);
        };

        const maxLength = model[field]?.maxlength;
        const fieldMask = model[field]?.mask;
        const idField = `${object.id}-${field}-${rowForm}-${colIndex}`;
        const selectValues = model[field]?.values
        const type = model[field]?.type || 'text';

        return (
            <Input 
                key={idField}
                id={idField} 
                name={field} 
                value={value} 
                size={size} 
                selectValues={selectValues}
                type={type} 
                maxlength={maxLength}
                disable={disable} 
                help={help} 
                mask={fieldMask}
                mask-reverse={true}
                onChange={handleChange} /> 
        );
    };

    return (
        <form method={method}>
            {formLines.map((formLine, rowForm) => (
                <div key={`row-${rowForm}`} className='row'>
                    {formLine.map((fieldInfo: any, colIndex: number) => renderField(fieldInfo, rowForm, colIndex))}
                </div>
            ))}
            <hr />
            <div className='row'>
                <div className='col text-end'>
                    {buttons}
                </div>
            </div>
        </form>
    );
}