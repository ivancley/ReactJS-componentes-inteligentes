import React, { useState, useEffect } from 'react'
import "./Login.css";
import { Card } from '../Card';
import { Form } from '../Form/Form';
import { Button } from '../Button';
import { ButtonLink } from '../Button/ButtonLink';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Loading} from "../Loading"; 
import { useNavigate } from 'react-router-dom';

type LoginProps = {
    url_success: string, 
    url_signup?: string, 
    url_endpoint: string, 
}

export const Login: React.FC<LoginProps> = (props) => {
    const[usuario, setUsuario] = useState({"login":"", "senha": ""})
    const[txtAlerta, setTxtAlerta] = useState("Login")
    const[loading, setLoading] = useState(false)
    const[redirect, setRedirect] = useState(false)
    const navigate = useNavigate()

    useEffect(()=> {
        if(redirect){
            navigate(props.url_success)
        }
    },[redirect])

    const model = {
        "login": {type: "email"},
        "senha": {type: "password", maxlength: 60},
    }
  
    const formLines = [
      [{field: "login"}],
      [{field: "senha"}]
    ]

    const handleFieldChange = (field: string, value: any) => {
        setUsuario(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const notifySucess = () => toast.success(txtAlerta);
    const notifyError = () => toast.error(txtAlerta);

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('username', usuario.login);
        formData.append('password', usuario.senha);
        setLoading(true)
        try {
            const response = await fetch(props.url_endpoint, {
                method: "POST",
                headers: { "Accept": "application/json","type": "formData"},
                body: formData
            });
            switch(response.status){
                case 200:
                    const responseData = await response.json()
                    setLoading(false)
                    setRedirect(true)
                    notifySucess()
                    break;
                default:
                    setLoading(false)
                    setTxtAlerta("Verifique seu login e senha")
                    notifyError()
            }
            
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <div id='login'>
            <div id='centralizado'>
            <Card 
                title='AluSaraiva'
                subtitle='Informe usuário e senha para ter acesso'>
                    <Form 
                        method='post'
                        formLines={formLines}
                        model={model}
                        object={usuario}
                        key={1}
                        buttons={[ 
                            <Button key={1} type='button'  title='Entrar' onClick={handleSubmit} />
                        ]}
                        onFieldChange={handleFieldChange}
                    />
                    <div className='row'>
                        <div className='col text-end'>
                            <ButtonLink title='Esqueceu sua senha ?' color='link' />
                        </div>
                    </div>
                    <ToastContainer />
                    
            </Card>
            {loading && <Loading /> } 
            </div>
        </div>
    )
}