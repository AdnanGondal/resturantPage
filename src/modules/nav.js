


const nav = (()=>{

    let navContent = document.createElement('nav');
    let navHeading = document.createElement('h1');
    let navRow = document.createElement("div");
    let logoDivCol = document.createElement("div");
    let buttonsRow = document.createElement("div");
    
    //ƒlet buttonDiv = document.createElement('div');
    let buttonsCol = document.createElement('div');

    let homeButCol = document.createElement('div')
    let homeBut = document.createElement('button');
    let menuButCol = document.createElement('div');
    let menuBut = document.createElement('button');
    let contactButCol = document.createElement('div');
    let contactBut = document.createElement('button');
    
    

    const render = (content)=>{

        navRow.classList.add("row","container-fluid");

        navContent.classList.add("navbar","navbar-inverse");
        
        logoDivCol.classList.add("col-xs-6","w-50");

        navHeading.classList.add("navbar-text")
        navHeading.textContent = "MyResturant";
        logoDivCol.appendChild(navHeading);

        navRow.appendChild(logoDivCol);
        //navRow.appendChild(buttonDivCol);
        
        
        homeBut.classList.add("btn","btn-warning","navbar-btn","rounded-0","btn-block")
        homeBut.textContent = "Home";
        homeBut.id = "home-but"; 
        buttonsRow.classList.add("row");

        homeButCol.classList.add("col-xs-4");
        homeButCol.appendChild(homeBut);

        menuBut.classList.add("btn","btn-default","navbar-btn","rounded-0","btn-block")
        menuBut.textContent = "Menu";
        menuBut.id = "menu-but";
        //buttonDiv.appendChild(menuBut);

        menuButCol.classList.add("col-xs-4","block");
        menuButCol.appendChild(menuBut);

        contactBut.classList.add("btn","btn-default","navbar-btn","rounded-0","btn-block");
        contactBut.textContent = "Contact";
        contactBut.id = "contact-but"

        contactButCol.classList.add("col-xs-4","block")
        contactButCol.appendChild(contactBut)
        
        //navRow.appendChild(buttonDiv);

        buttonsRow.appendChild(homeButCol);
        buttonsRow.appendChild(menuButCol);
        buttonsRow.appendChild(contactButCol);
        buttonsRow.classList.add("block");

        
        buttonsCol.classList.add("col-xs-6","w-50");
        buttonsCol.append(buttonsRow);
        navRow.appendChild(buttonsCol);
        navContent.appendChild(navRow);
        
        content.appendChild(navContent);



        //action listeners:

        homeBut.addEventListener('click',()=>{
            homeBut.classList.add("btn-warning");
            menuBut.classList.remove("btn-warning");
            contactBut.classList.remove("btn-warning");
        });

        menuBut.addEventListener('click',()=>{
            menuBut.classList.add("btn-warning");
            homeBut.classList.remove("btn-warning");
            contactBut.classList.remove("btn-warning");
        });

        contactBut.addEventListener('click',()=>{
            contactBut.classList.add("btn-warning");
            homeBut.classList.remove("btn-warning");
            menuBut.classList.remove("btn-warning");
        });


    } 

    

    return {render}

})();

export {nav}