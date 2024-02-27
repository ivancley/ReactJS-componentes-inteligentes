import React, { ReactNode, CSSProperties } from 'react';
import "./Table.css";
import { Card } from '../Card';
import { Search } from '../Search';
import { Button } from '../Button';
import { Modal } from '../Modal';

type TableProps = {
    title?: string,
    style?: CSSProperties;
    buttonTitle?: string;
    columns: string[];
    objects: any[];
    formLines: any[];
    model: any;
}

export const Table: React.FC<TableProps> = ({ title, style, columns, objects, buttonTitle, model, formLines, ...rest }) => {
    const cssClass = "table table-striped table-hover table-bordered";

    const formatCell = (index:number, content:any, column:string ): ReactNode => {
        const key = index
        let css = ""
        let formatContent = content
        if (model[column]) {
            const { type } = model[column]
            switch (type) {
                case "text":
                    css = "text-start"; break;
                case "integer":
                    css = "text-center"; break;
                case "decimal":
                    css = "text-end"; 
                    formatContent = formatContent.toLocaleString('pt-br', {minimumFractionDigits: 2});
                    break;
                case "currency":
                    css = "text-end"; 
                    formatContent = formatContent.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
                    break;
            }
        }
        return <td key={key} className={css} >{formatContent}</td>
    }

    return (
        <Card title={title} buttonTitle='Novo'>
            <Search text="Pesquisar "/>
            <table className={cssClass} style={{ ...style, ...rest }}>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} scope="col" className='text-uppercase text-center'>{column}</th>
                        ))}
                        <th scope="col" className='text-uppercase text-center'>opções</th>
                    </tr>
                </thead>
                <tbody>
                    {objects.map((obj) => (
                        <tr key={obj.id}>
                            {columns.map((column, colIndex) => (
                                formatCell(colIndex, obj[column], column)
                            ))}
                            <td className='text-center'>
                                <Modal
                                    form_method='post'
                                    id={obj.id} 
                                    buttons={[ <Button key={`save-${obj.id}`}  title='Salvar' />]}
                                    object={obj} 
                                    model={model} 
                                    formLines={formLines} />
                                <Button small modal_id={obj.id}>
                                    <i className="bi bi-pencil-square"></i>
                                </Button>
                                <Button small color='danger'><i className="bi bi-trash3-fill"></i></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    )
}