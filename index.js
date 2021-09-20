const express = require('express');
const server = express();
const UsuariosDAO = require('./usuariosDAO')
server.use(express.json());


server.get('/usuarios/pegaTodosUsuarios', (req, res) => {
return res.json(usuarios);
}) 

server.get('/usuarios/pegaUsuarioPorId/:id', async (req, res) => {
    const { id } = req.params;
    const  usuario = await UsuariosDAO.pegarUsuarioPorId(id);
    return res.send(usuario);
})

server.post('/usuarios/criarUsuario', async (req, res) => {
    const { nome, email, senha, dataDeNascimento } = req.body; 
    const usuarioCriado = await UsuariosDAO.criarUsuario({nome, email,senha, dataDeNascimento});
    return res.send(usuarioCriado); 
    
    })
server.put('/usuarios/editarUsuario/:id', async (req, res) => {
    const { id } = req.params;

    const usuario = UsuariosDAO.editarUsuarioPorId(req.body,id);
    
    
    return res.send(usuarios);
    }); 

server.patch('/usuarios/mudarEmail', async(req, res)=>{
    const {email} = req.body;
    
});

server.delete('/usuarios/:index', (req, res) => {
    const { index } = req.params; 
    usuarios.splice(index, 1); 
    
    return res.send();
    }); 
    server.listen(3000);