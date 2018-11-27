// import * as mysql from 'mysql';
// import * as sequelize from 'sequelize';

// const Schema = mysql.Schema;

// export const UserSchema = new Schema({
//     firstName: {
//         type: String,
//         required: 'Enter a first name'
//     },
//     lastName: {
//         type: String,
//         required: 'Enter a last name'
//     },
//     email: {
//         type: String            
//     },
//     company: {
//         type: String            
//     },
//     phone: {
//         type: Number            
//     },
//     created_date: {
//         type: Date,
//         default: Date.now
//     }
// });

// // exports = (sequelize, DataTypes) => {
// //     var Model = sequelize.define('User', {
// //         first     : DataTypes.STRING,
// //         last      : DataTypes.STRING,
// //         email     : {type: DataTypes.STRING, allowNull: true, unique: true, validate: { isEmail: {msg: "Phone number invalid."} }},
// //         phone     : {type: DataTypes.STRING, allowNull: true, unique: true, validate: { len: {args: [7, 20], msg: "Phone number invalid, too short."}, isNumeric: { msg: "not a valid phone number."} }},
// //         password  : DataTypes.STRING,
// //     })
// // };