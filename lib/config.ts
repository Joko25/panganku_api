import * as sequelize from 'sequelize';

// database
export const conn = new sequelize('panganku_db', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});