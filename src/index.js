
import {homePage} from "./modules/homePage";
import {nav} from "./modules/nav"
import {menuPage} from "./modules/menuPage"
import {contactPage} from "./modules/contactPage"

const displayController = (()=>{
   
    let content = document.querySelector("#content");
    
    const render = ()=>{
    
        nav.render(content);
        let menuButton = document.querySelector("#menu-but");
        let homeButton = document.querySelector("#home-but");
        let contactButton = document.querySelector("#contact-but")

        homePage.render(content);
        
        homeButton.addEventListener('click',()=>{
            homePage.render(content);
            menuPage.render(content);
            contactPage.render(content);
            menuPage.remove(content);
            contactPage.remove(content);
            
        });

        menuButton.addEventListener('click',()=>{
        
            homePage.render(content);
            menuPage.render(content);
            contactPage.render(content);
            homePage.remove(content);
            contactPage.remove(content);
        });

        contactButton.addEventListener('click',()=>{
            homePage.render(content);
            menuPage.render(content);
            contactPage.render(content);
            homePage.remove(content);
            menuPage.remove(content);

        });
        

    }
   
   return {
       render
   }
    
})();

displayController.render();