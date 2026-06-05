# 🚀 Projeto React - Componentes com Axios e Manipulação de Estado

## 📋 Sobre o Projeto

Este projeto foi desenvolvido utilizando **React** e **Vite**, com o objetivo de praticar conceitos fundamentais do desenvolvimento front-end, como consumo de APIs, manipulação de estados, renderização dinâmica de componentes e interação com formulários.

O sistema é composto por **quatro componentes independentes**, cada um responsável por resolver um desafio específico utilizando diferentes recursos do React.

---

## 🛠️ Tecnologias Utilizadas

* React
* Vite
* Axios
* MochAPI

---

## 📌 Funcionalidades

### 1️⃣ Cadastro e Listagem de Usuários

Este componente realiza a integração com uma API hospedada no **MochAPI** através da biblioteca **Axios**.

#### Funcionalidades:

* Cadastro de usuários através de um formulário.
* Campos disponíveis:

  * Nome
  * E-mail
  * CPF
* Envio dos dados para a API utilizando requisições HTTP.
* Exibição de todos os usuários cadastrados em uma tabela dinâmica.
* Atualização da lista de registros após novos cadastros.

#### Conceitos praticados:

* Consumo de APIs REST.
* Requisições HTTP com Axios.
* Manipulação de formulários.
* Gerenciamento de estado com Hooks.

---

### 2️⃣ Consulta de Usuário por ID

Este componente permite buscar um usuário específico armazenado na API.

#### Funcionalidades:

* Campo para inserção do ID.
* Busca do registro correspondente na API.
* Exibição dos dados encontrados.
* Mensagem de erro quando o ID informado não existe.

#### Conceitos praticados:

* Requisições GET.
* Tratamento de erros.
* Renderização condicional.

---

### 3️⃣ Seleção de Marca e Modelo de Carro

Este componente utiliza um elemento `<select>` para permitir que o usuário escolha uma marca de veículo.

#### Base de dados utilizada:

```javascript
[
  { id: 1, marca: 'Toyota',    modelo: 'Corolla' },
  { id: 2, marca: 'Honda',     modelo: 'Civic' },
  { id: 3, marca: 'Ford',      modelo: 'Mustang' },
  { id: 4, marca: 'Chevrolet', modelo: 'Camaro' },
  { id: 5, marca: 'Nissan',    modelo: 'Altima' }
]
```

#### Funcionalidades:

* Seleção da marca através de um menu suspenso.
* Exibição automática do modelo correspondente.
* Atualização dinâmica da interface conforme a escolha do usuário.

#### Conceitos praticados:

* Manipulação de eventos.
* Uso de estados.
* Renderização dinâmica de dados.

---

### 4️⃣ Alteração Dinâmica de Cores

Este componente demonstra a manipulação de estados através da alteração dinâmica de estilos.

#### Funcionalidades:

* Botão para alteração da cor da tela.
* Alternância entre quatro cores diferentes.
* Atualização visual em tempo real.

#### Conceitos praticados:

* useState.
* Eventos de clique.
* Manipulação de estilos inline.

---

## 📂 Estrutura do Projeto

```bash
src/
│
├── components/
│   ├── CadastroUsuarios/
│   ├── BuscarUsuario/
│   ├── ModeloCarros/
│   └── AlterandoCor/
│
├── App.jsx
└── main.jsx
```

---

## ▶️ Como Executar o Projeto

### Instalar as dependências

```bash
npm install
```

### Executar em ambiente de desenvolvimento

```bash
npm run dev
```

### Gerar build de produção

```bash
npm run build
```

---

## 🎯 Objetivos de Aprendizagem

Durante o desenvolvimento deste projeto foram praticados os seguintes conceitos:

* Componentização em React.
* Criação e manipulação de formulários.
* Consumo de APIs com Axios.
* Uso de Hooks (`useState` e `useEffect`).
* Renderização condicional.
* Manipulação de listas.
* Eventos e interação com o usuário.
* Organização de componentes.
* Desenvolvimento com Vite.

---

## 👨‍💻 Autores

- Kaique Abranches
- Caíque Araújo
- Douglas Costa
- Gabriel Mendonça
