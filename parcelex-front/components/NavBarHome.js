app.component('nav-bar-home',{
  props:{

  },
    /*html*/
  template:
  `
  <div class="initial_bar">
        <button v-on:click="changeToEditUser">Criar Usuario</button>
        <div class="search_bar">
        <input  type="text" placeholder="Pesquisar Usuario">
        <i class="fa fa-search"></i>
        
        </div>
      </div>
    `
})