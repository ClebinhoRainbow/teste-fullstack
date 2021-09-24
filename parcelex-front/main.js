
const app = Vue.createApp({
   
    data: function(){
        return{
           
        }
    },
 
      /*html*/
    template: ` 
        <nav class="container">
            <nav-bar-home></nav-bar-home>
            <!-- <nav-bar-voltar></nav-bar-voltar> -->
        </nav>
        <!--<user-display></user-display>-->
        <!-- <edit-user></edit-user> -->
        <!-- <delete-user></delete-user> -->
         <!--<edit-email></edit-email> -->
  `,
  method: {
    swapComponent: function(component)
    {
      this.currentComponent = component;
    }
  }
})