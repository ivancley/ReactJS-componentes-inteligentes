import React from 'react';
import {dados_fake} from "./DadosFake";
import {Table} from "./SmartFlexUi/Table"


function App() {
  const listPessoas = dados_fake.pessoas 

  const colunasVisiveis = ["id", "nome", "idade", "peso", "salario", "data nasc."]

  const modeloDeDados = {
    "id": { type: "integer" },
    "nome": { type: "text", maxlength: 60 },
    "idade": { type: "integer", mask: "000" },
    "peso": { type: "decimal", mask: "000,00" },
    "salario": { type: "currency", mask: "000.000.000.000.000,00" },
    "cpf": { type: "text", mask: "999.999.999-99" },
    "rg": { type: "text", mask: "99.999.999-9" },
    "data nasc.": { type: "date", mask: "dd/MM/yyyy" },
    "sexo": {
      type: "select", values: [
        { id: 1, value: "Masculino" },
        { id: 2, value: "Feminino" },
        { id: 3, value: "Outro" }]
    },
    "email": { type: "email" },
    "senha": { type: "password", maxlength: 60 },
    "cep": { type: "text", mask: "99999-999" },
    "endereco": { type: "text", maxlength: 12 },
    "numero": { type: "text", maxlength: 8 },
    "bairro": { type: "text", maxlength: 60 },
    "cidade": { type: "text", maxlength: 60 },
    "estado": { type: "text", maxlength: 2 },
    "telefone_fixo": { type: "text", mask: "(99) 99999-9999" },
    "celular": { type: "text", mask: "(99) 99999-9999" },
  }

  const modeloFormulario = [
    [{ field: "nome", disable: true, help: "Esse campo não pode ser alterado devido a testes" }],
    [{ field: "idade", size: 2 }, { field: "peso", size: 2 }, { field: "salario", size: 2 }, { field: "sexo", size: 2 }, { field: "data nasc.", size: 4 }],
    [{ field: "endereco", size: 4 }, { field: "numero", size: 2 }, { field: "bairro", size: 3 }, { field: "cidade", size: 3 }],
    [{ field: "cpf" }, { field: "rg" }],
    [{ field: "email" }, { field: "senha" }, { field: "telefone_fixo" }, { field: "celular" }]
  ]

  return (
    <main>
      <Table 
        title='Cadastro de Clientes'
        buttonTitle="Fechar" 
        columns={colunasVisiveis}
        objects={listPessoas} 
        model={modeloDeDados}
        formLines={modeloFormulario} />
    </main>
  )
}

export default App;
