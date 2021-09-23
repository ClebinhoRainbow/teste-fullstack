app.component('edit-user',{
  props:{

  },
    /*html*/
  template:
  `
  <main>
        <div class="main-container">
        
            
           
           
        <form action="/action_page.php">
       <div>
            <label for="nome">Nome</label><br>
            <input type="text" id="nome">
            <label for="email">E-Mail</label><br>
            <input type="email" id="email" >
       </div>
       <div>
              <label for="data">Data de Nascimento</label>
              <input type="text" id="data" >
              <label for="senha">Senha</label>
              <input type="password" id="senha" >
              <label for="resenha">Re-escreva senha</label>
              <input type="password" id="resenha" >
       </div>
        
       <button>Criar Usuário</button>
      </form>
        </div>
          
      
      </main>
    `
})