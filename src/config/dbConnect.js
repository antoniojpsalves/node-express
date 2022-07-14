import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://syn:123@livraria-node-api.uu917.mongodb.net/livraria-node-api");

let db = mongoose.connection;

export default db;