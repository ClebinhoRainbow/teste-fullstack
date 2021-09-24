app.component('edit-user',{
  props:{

  },
    /*html*/
  template:
  `
  <main>
        <div class="main-container">
       <div class="container_edit_user">
       <form action="/action_page.php">
       <div class="name_and_mail">
            <div class="input_nome">
                <label for="nome">Nome</label><br>
                <input type="text" id="nome">
            </div>
         
          
          <div class="input_email">
              <label for="email">E-Mail</label><br>
              <input type="email" id="email" >
          </div>
           
       </div>
       <div class="password_and_date">
             <div>
                <label for="data">Data de Nascimento: </label>
                <input type="date" id="data" >
             </div>
             <div>
                <label for="senha">Senha: </label>
                <input type="password" id="senha" >
             </div>
             <div>
                <label for="resenha">Re-escreva senha: </label>
                <input type="password" id="resenha" >
             </div>
             
       </div>
        
       
      </form>
    
       </div>
        </div>
          
        <button>Criar Usuário</button>      
      </main>
    `
})