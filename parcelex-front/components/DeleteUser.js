app.component('delete-user',{
  props:{

  },
    /*html*/
  template:
  `
  <main>
        <div class="main-container">
        
        
          <div class="delete">
          <p >Você relamente deseja deletar o usuário de nome {Nome}?</p>
                <div class="delete-checkbox">
                <input type="checkbox" id="delete" name="true"
                unchecked>
          <label for="delete">Sim</label>
                </div>
          </div>
        
        </div>
        <button>Deletar</button>
      
      </main>
    `
})