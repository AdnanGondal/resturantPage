
import {homePage} from "./modules/homePage";
import {nav} from "./modules/nav"

const displayController = (()=>{
   
    let content = document.querySelector("#content");
    
    const render = ()=>{
    
        nav.render(content);
        homePage.render(content);
   
    }
   
   return {
       render
   }
    
})();

displayController.render();