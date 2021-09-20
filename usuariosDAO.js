const { Collection, ObjectId } = require('mongodb');
const client = require('./connect_db')

function getCollection(){
    return client.db().collection('usuarios');
}

function criarUsuario({nome, email,senha, dataDeNascimento}){
    return getCollection().insertOne({nome, email,senha,dataDeNascimento,criadoEm: new Date, atualizadoEm: new Date}).then((res) => res.insertedId);
}

function pegarUsuarios(){
   return getCollection().find().toArray();
}
function pegarUsuarioPorNome(nome){
    return getCollection().find({nome}).toArray();
}
function pegarUsuarioPorId(id){
    return getCollection().find({_id:ObjectId(id)}).toArray();
}

function editarUsuarioPorId(dados,id){
    return  getCollection().updateOne({_id:ObjectId(id)},{$set:{...dados}});
}
function editarEmailDeUsuario(email,id){
    return  getCollection().updateOne({_id:ObjectId(id)},{$set:{email:email}});
}
function deletarUsuarioPorId({nome, email,senha, dataDeNascimento}){
    const usuario = {
        nome:nome
    };
    
    return getCollection.deleteOne(usuario);
}
module.exports = {
    criarUsuario,
    pegarUsuarios,
    pegarUsuarioPorNome,
    pegarUsuarioPorId,
    editarUsuarioPorId,
    deletarUsuarioPorId
}