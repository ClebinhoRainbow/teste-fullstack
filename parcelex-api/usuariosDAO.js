const { Collection, ObjectId } = require('mongodb');
const client = require('./connect_db')

function getCollection(){
    return client.db().collection('usuarios');
}

function criarUsuario({nome, email,senha, dataDeNascimento}){
    return getCollection().insertOne({nome, email,senha,dataDeNascimento,criadoEm: new Date(), atualizadoEm: new Date()}).then((res) => res.insertedId);
}

function pegarUsuarios(){

   return getCollection().find({}).toArray();
}
function pegarUsuarioPorNome(nome){
    return getCollection().find({nome}).toArray();
}
function editarUsuarioPorId({updateData,id}){
    return getCollection().updateOne({_id:ObjectId(id)},{$set:{...updateData}});
}
function pegarUsuarioPorId(id){
    return getCollection().find({_id:ObjectId(id)}).toArray();
}

function editarEmailDeUsuario(email,id){
    
    return  getCollection().updateOne({_id:ObjectId(id)},{$set: {"email":email}});
}
function deletarUsuarioPorId(id){
    return getCollection().deleteOne({_id:ObjectId(id)});

}
module.exports = {
    criarUsuario,
    pegarUsuarios,
    pegarUsuarioPorNome,
    editarUsuarioPorId,
    pegarUsuarioPorId,
    editarEmailDeUsuario,
    deletarUsuarioPorId
}