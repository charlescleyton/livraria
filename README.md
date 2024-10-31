# Documentação do Projeto Laravel com Frontend em React
## Introdução
Este projeto é uma aplicação web que utiliza Laravel como backend e React como frontend. A aplicação permite a gestão de livros, oferecendo funcionalidades para listar, buscar, adicionar e deletar livros.

## Estrutura do Projeto
Backend: Laravel (API RESTful)

Frontend: React

Endpoints da API

## Instalação do Backend (Laravel)

### 1.  Clone o Repositório:

    git clone https://github.com/charlescleyton/livraria.git
#### Navegue até a pasta do projeto:

    cd livraria
### 2. Instale as Dependências do Laravel:

    composer install
### 3. Configure o Ambiente:

Renomeie o arquivo .env.example para .env.

Configure as credenciais do banco de dados no arquivo .env:

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=nome_do_banco
    DB_USERNAME=usuario
    DB_PASSWORD=senha
### 4. Gere a Chave da Aplicação:
    php artisan key:generate
### 5. Execute as Migrações:
    php artisan migrate
### 6. Inserir dados ficticios para teste:
    php artisan migrate:fresh --seed
### 7. Inicie o Servidor Laravel:
    php artisan serve

## Instalação do Frontend (React)

### 1. Navegue para o Diretório do Frontend:
verifique se já está dentro do projeto livraria

    cd frontend

### 2. Instale as Dependências do React:
    npm install

### 3. Inicie o Servidor de Desenvolvimento do React:
    npm start

O aplicativo React estará disponível em http://localhost:3000.


## A seguir, estão os endpoints disponíveis na API para consumo:

### 1. **Listar Todos os Livros**

Endpoint: GET 

        http://127.0.0.1:8000/api/books

**Descrição:** Retorna uma lista de todos os livros cadastrados.

### 2. **Buscar Livro pelo Título**
Endpoint: GET 

        http://127.0.0.1:8000/api/books?title=titulo do livro


**Descrição:** Busca um livro específico pelo seu título.

### 3. **Adicionar Novo Livro**
Endpoint: POST 

        http://127.0.0.1:8000/api/books
**Descrição:** Adiciona um novo livro ao sistema.

Body da Requisição:

    {
        "title": "Livro Exemplo",
        "author": "Autor Exemplo",
        "genre": "Ficção",
        "year": 2021,
        "description": "Descrição do livro exemplo."
    }

### 4. **Editar um Livro pelo ID**
Endpoint: PUT

        http://127.0.0.1:8000/api/books/{id}
**Descrição:** Adiciona um novo livro ao sistema.

Body da Requisição:

    {
        "title": "Livro Exemplo",
        "author": "Autor Exemplo",
        "genre": "Ficção",
        "year": 2021,
        "description": "Descrição do livro exemplo."
    }

### 5. **Deletar Livro pelo ID**
Endpoint: DELETE 

        http://127.0.0.1:8000/api/books/{id}


**Descrição:** Deleta um livro com base no seu ID.

Contato
Para mais informações, entre em contato com https://github.com/charlescleyton


