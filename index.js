const express = require('express');
const server = express();
const UsuariosDAO = require('./usuariosDAO')
server.use(express.json());


server.get('/usuarios/pegaTodosUsuarios', async (req, res) => {
    return res.send(await UsuariosDAO.pegarUsuarios());
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
    const usuario = await UsuariosDAO.editarUsuarioPorId(req.body,id);
    return res.send(usuario);
    }); 

server.patch('/usuarios/mudarEmail/:id', async(req, res)=>{
    const {email} = req.body;
    const {id} = req.params;
    const usuario = await UsuariosDAO.editarEmailDeUsuario(email,id);
    return res.send(usuario);

    
});

server.delete('/usuarios/apagarUsuarioPorId/:id',async (req, res) => {
    const {id} = req.params; 
    const deletado = await UsuariosDAO.deletarUsuarioPorId(id); 
    return  res.send(deletado);
}); 
    server.listen(3000);