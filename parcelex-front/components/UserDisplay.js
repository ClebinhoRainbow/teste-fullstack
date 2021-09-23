app.component('user-display',{
    props:{

    },
    data: () => ({
        toCreateUser: false,

        usuarios:[{
          "nome":"dudu",
          "email":"super@yahoo.com",
          "id":"asjfçlasjas",
          "dataDeNascimento":"03/03/03",
        }, {
          "nome":"dudu",
          "email":"super@yahoo.com",
          "id":"asjfçlasjas",
          "dataDeNascimento":"03/03/03",
        }, {
          "nome":"dudu",
          "email":"super@yahoo.com",
          "id":"asjfçlasjas",
          "dataDeNascimento":"03/03/03",
        }, {
          "nome":"dudu",
          "email":"super@yahoo.com",
          "id":"asjfçlasjas",
          "dataDeNascimento":"03/03/03",
        }, {
          "nome":"dudu",
          "email":"super@yahoo.com",
          "id":"asjfçlasjas",
          "dataDeNascimento":"03/03/03",
        }],
        icones:[{ 
          "edit":"./assets/edit/1x/outline_edit_black_24dp.png",
          "delete":"./assets/delete/1x/outline_delete_black_24dp.png",
        }, { 
          "edit":"./assets/edit/1x/outline_edit_black_24dp.png",
          "delete":"./assets/delete/1x/outline_delete_black_24dp.png",
        }, { 
          "edit":"./assets/edit/1x/outline_edit_black_24dp.png",
          "delete":"./assets/delete/1x/outline_delete_black_24dp.png",
        }, { 
          "edit":"./assets/edit/1x/outline_edit_black_24dp.png",
          "delete":"./assets/delete/1x/outline_delete_black_24dp.png",
        }, { 
          "edit":"./assets/edit/1x/outline_edit_black_24dp.png",
          "delete":"./assets/delete/1x/outline_delete_black_24dp.png",
        }]
    }),
    template:
    /*html*/
    `
    <main>
        <div class="main_list">
          <div class="head-table">
            <ul class="columns">
                <li>Id</li>
                <li>Nome</li>
                <li>E-mail</li>
                <li>Data de Nascimento</li>
            </ul>
          </div>
         <div class="main_list_feed">
            <div class="left-side">
              <ul v-for="usuario in this.usuarios" class="columns">
                <li>{{usuario.id}}</li>
                <li>{{usuario.nome}}</li>
                <li>{{usuario.email}}</li>
                <li>{{usuario.dataDeNascimento}}</li>
              </ul>
             
            </div>
            <div class="right-side">
              <div v-for="icone in icones" class="container">
                <img :src=icone.edit alt="edit button">
                <img :src=icone.delete alt="delete button">
              </div>
            </div>
         </div>
        </div>
          
          <button>Carregar Mais</button>
      </main>
    `,
 
    

})
