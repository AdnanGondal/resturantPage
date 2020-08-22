
import {homePage} from "./modules/homePage";


const displayController = (()=>{
   
    let content = document.querySelector("#content");
    const render = ()=>{
    
    
    homePage.render(content);
   
    }
   
   return {
       render,
   }
    
})();

displayController.render();