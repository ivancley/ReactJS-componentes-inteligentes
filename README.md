# ReactJS-componentes-inteligentes
Componentes inteligentes para visualização de dados com ReactJS - versão DEMO
# ReactJS Smart Components
Componentes inteligentes para projetos ReactJS

## Objetivo
Desenvolver componentes visuais reutilizáveis que possam interagir entre si de forma automática, poupando o tempo do desenvolvedor.

## Principal funcionalidade 
### Crud automatizado
Com o preenchimento do componente Tabela automaticamente são criados:
* Tabela aplicando formatação de dados de acordo com o modelo de dados e colunas visíveis
* Botões de inclusão, alteração e exclusão 
* formutário para inclusão ou alteração de dados conforme modelo de formulário

Modelo para a criação da tabela 

```js
const colunasVisiveis = ["id", "nome", "idade", "peso", "salario", "data nasc."]
const modelDeDados = {
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
```
com base nessas informações é gerado essa tabela 
<img src="/tabela.png">

e ao clicar em "Novo" ou editar é gerado esse formulário 
<img src="/formulario.png">

Para o desenho do formulário foi necessário passar o modelo desejado onde cada linha da lista representa uma linha no formulário, segue exemplo 
```js
const modeloFormulario = [
    [
        { field: "nome", disable: true, help: "Esse campo não pode ser alterado devido a testes" }
    ],
    [
        { field: "idade", size: 2 }, 
        { field: "peso", size: 2 }, 
        { field: "salario", size: 2 }, 
        { field: "sexo", size: 2 }, 
        { field: "data nasc.", size: 4 }
    ],
    [
        { field: "endereco", size: 4 }, 
        { field: "numero", size: 2 }, 
        { field: "bairro", size: 3 }, 
        { field: "cidade", size: 3 }
    ],
    [
        { field: "cpf" }, 
        { field: "rg" }
    ],
    [
        { field: "email" }, 
        { field: "senha" }, 
        { field: "telefone_fixo" }, 
        { field: "celular" }
    ]
  ]
```

### dependências 
```shell
npm install --save react-toastify 
npm install --save react-spinners
npm install --save react-router-dom
```
