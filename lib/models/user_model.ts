import * as sequelize   from 'sequelize';
import { conn }         from '../config';

export const users = conn.define('users', {
    'uuid'      : {
                    type : sequelize.STRING,
                    primaryKey: true
                },
    'username'  : sequelize.STRING,
    'password'  : sequelize.STRING,
    'email'     : sequelize.STRING,
    'createdAt' : {
                    type: sequelize.DATE,
                    defaultValue: sequelize.NOW
                },    
    'updatedAt' : {
                    type: sequelize.DATE,
                    defaultValue: sequelize.NOW
                }
},{
    freezeTableName: true,
});