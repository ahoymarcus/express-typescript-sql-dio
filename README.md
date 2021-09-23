# Node.js com Bancos de Dados Relacionais (SQL)

O projeto serve como prática para aprender a lidar com bancos de dados relacionais a partir do Node-JS. Este curso utiliza uma pequena API criada no curso "Explorando o Estilo Arquitetural REST com Node.js". 

Estaremos utilizando como dependência para a conexão com o banco de dados, o cliente básico do Postgres, o Pg (ou ainda Node-Postgres), isto é, sem o uso de qualquer ORM para mapeamento do dados. 

Intalaremos também os types do Typescript relativos à biblioteca Pg do Postgres.

Trata-se da criação de um microserviço de autenticação para usuários e da criação de um código que possa ser reutilizado em outros projetos de backend[^1].





<br />

Dependências:

- Dotenv
- Typescript
- @types/node
- Express-JS
- @types/express
- Ts-node-dev
- Http-status-codes
- Pg (node-postgres)
- @types/pg





<br />

### Apresentando a primeira rota: GET /users 
![Resultado da chamada da 1ª rota em get users](/public/images/rota-get-users.png)



<br />

### Apresentando a segunda rota: GET /users/:uuid
![Resultado da chamada da 2ª rota em get users-id](/public/images/rota-get-users-id.png)



<br />

### Apresentando a terceira rota: POST /users
![Resultado da chamada da 3ª rota em post users](/public/images/rota-post-users.png)




<br />

### Apresentando a quarta rota: PUT /users/:uuid 
![Resultado da chamada da 4ª rota em put users-id](/public/images/rota-put-users-id.png)



<br />

### Apresentando a quinta rota: DELETE /users/:uuid 
![Resultado da chamada da 5ª rota em delete users-id](/public/images/rota-delete-users-id.png)



<br />

### Testando tratamento de erro genérico em uma das rotas:
![Testando um tratamento de erro genérico](/public/images/inserindo-tratamento-de-erro-genérico.png)




<br />

[^1] Orientação do professor Renan Johannsen de Paula da Digital Innovation One.








