import mongoose from "mongoose";

//const url = 'mongodb://127.0.0.1:27017/crudBurgersC23i' //localhost = 127.0.0.1

const url = 'mongodb+srv://crudburgerC23i:v5VKWTNFhY4jgZM1@cluster0.l1xehje.mongodb.net/crudBurgersC23i'

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('BD Conectada');
});
