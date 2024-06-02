# Candidate - Nguyễn Thế Điềm
 
# Guide to run project in local machine
## Setup mysql server run on local machine
- schema name: development
- host: localhost
- port: 3306
- username: root
- password: root

## Install and run expressjs app
Create .env file from .env.sample

    cp  .env.sample  .env
Install packages management pnpm

    npm install -g pnpm
Install all packages

    pnpm install

Migration database

    npx sequelize-cli db:migrate

Seed admin user

    npx sequelize-cli db:seed:all

Run project:
		
    pnpm start

   ### => App will run on port 3000


## Note
- After run project and seed admin account, you can call login api with account:

    username: admin1
    
    password: 12345
