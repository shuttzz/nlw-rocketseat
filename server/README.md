# DEPENDÊNCIAS DE DESENVOLVIMENTO

- npm install ts-node-dev -D
    - Utilizado para instalar o pacote que ao execurtarmos o servidor irá ficar verificando por mudanças no código e atualizar automaticamente nossa aplicação
- npm install @types/cors -D
    - Utilizado para importar os tipos utilizados pelo TypeScript
- npm install @types/multer -D
    - Declaração de tipos para o multer TypeScript
    
# DEPENDÊNCIAS DE PRODUÇÃO

- npm install knex
    - Utilizado para fazer toda a gerência com o banco de dados, inclusive trabalhar com migrations
- npm install sqlite3
    - Pacote necessário para se trabalhar com o banco de dados Sqlite3
- npm install cors
    - Pacote necessário para se trabalhar com CORS
- npm install multer
    - Pacote necessário para se trabalhar com uploads de images
- npm install celebrate
    - Pacote para fazer validação de dados

# COMANDOS
- **npm ts-node {caminho-arquivo-inicial}**
    - Executa o servidor do NodeJs, porém não fica verificando mudanças de código
- **npm ts-node-dev {caminho-arquivo-inicial}**
    - Executa o servidor e fica monitorando alterações no código
- ***npm run dev*** ou ***yarn dev***
    - Esse comando executa o comando que foi adiciona ao atributo *scripts* do arquivo **package.json**
- ***npx knex migrate:latest --knexfile {caminho-do-arquivo-knexfile.ts} migrate:latest***
    - Esse comando roda as migrations no banco de dados
- ***npm run knex:migrate***
    - Esse comando faz a mesma coisa que o comando acima, porém é um atalho para o mesmo
- ***npm run knex:seed***
    - Esse comando faz rodar as seeders no banco de dados
    
# CONFIGURAÇÃO
**Arquivo package.json**

- campo scripts:
    - ***dev*** -> ts-node-dev {flags} {caminho-do-arquivo-inicial}
    - ***knex:migrate*** -> knex migrate:latest --knexfile {caminho-do-arquivo-knexfile} migrate:latest
    - ***knex:seed*** -> knex --knexfile {caminho-do-arquivo-knexfile} seed:run