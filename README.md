# Todo-list

Requirements:

1. Node version v6.11.5 or greater
2. Angular CLI v 1.5.5 (npm install -g @angular/cli)
3. Postgres DB empty 

How to run:
1. Inside knexfile.js edit the line connection and add your db settings
    example: connection: 'postgres://USER_DB:PASSWORD@HOST:5432/DATABASE'
2. Make 'npm install' on the project root 
3. Make 'npm install' inside the client directory.
4. Execute migrations with 'npm run knex migrate:latest'
5. Execute in the project root 'node .'
6. Execute in the client directory 'ng serve'
7. Go to the browser and enter url 'localhost:4200'
