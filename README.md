🟦 My Test – Frontend

Aplicação frontend desenvolvida em React utilizando React Router v7, estruturada com Clean Architecture, separando responsabilidades entre camadas como application, core, infrastructure e ui.

A aplicação consulta habilidades de Pokémon utilizando um backend local.

🚀 Tecnologias

React

React Router v7

TypeScript

Axios

TailwindCSS

Clean Architecture

📂 Estrutura do Projeto
app/
application/
hooks/
queries/
core/
entities/
usecases/
infrastructure/
http/
services/
ui/
pages/
routes/
root.tsx
app.css
react-router.config.ts

📘 Princípios aplicados

UI → apenas renderização

Application → coordenação de lógica (hooks, queries)

Core → regras de negócio, entidades e casos de uso

Infrastructure → integrações externas (ex.: API)

▶️ Como rodar o projeto
1️⃣ Instale as dependências
yarn

2️⃣ Inicie o servidor de desenvolvimento
yarn dev

3️⃣ Frontend disponível em:
http://localhost:5173

🔌 Integração com o Backend

O frontend depende da API backend rodando em:

GET http://localhost:3000/pokemon?pokemon={nameOrId}

📤 Exemplo de resposta esperada:
{
"abilities": ["static", "lightning-rod"]
}

📦 Build para produção
yarn build

🧪 Testes
yarn test
