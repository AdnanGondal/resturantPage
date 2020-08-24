
const menuPage = (()=>{

    let menuContent = document.createElement('div');
    let menuHeading = document.createElement('h2');
    
    let firstRowDiv = document.createElement('div')

    let startersDiv = document.createElement('div');
    let starterHeading = document.createElement('h4');
    let starterItemDiv = document.createElement("div");
    let starterItems = ["Kebab","Samosa","Pakora","Tikka"];
    let starterPrices = [1,1,0.5,2];
    let starterItemColDiv = document.createElement("div");
    let starterPriceColDiv = document.createElement("div");
    
    let mainsDiv = document.createElement('div');
    let mainsHeading = document.createElement('h4')
    
    const render = (content)=>{
        menuContent.classList.add("container-fluid");

        menuHeading.textContent = "Menu";
        menuHeading.classList.add("text-center")
        menuContent.appendChild(menuHeading);


        firstRowDiv.classList.add("row");

        startersDiv.classList.add("col-md-6")
        starterHeading.textContent = "Starters";
        startersDiv.appendChild(starterHeading);
        starterItemDiv.classList.add("row");
        starterItemColDiv.classList.add("col-md-6");
        starterPriceColDiv.classList.add("col-md-6")
        
        for(let i=0;i<4;i++){ 
            let starterItem=document.createElement('p');
            let starterPrice = document.createElement('p');

            starterPrice.textContent = `.....£ ${starterPrices[i]}`
            starterItem.textContent = (`${starterItems[i]}`);
            
            starterItemColDiv.appendChild(starterItem);
            starterPriceColDiv.append(starterPrice);
        }
        starterItemDiv.appendChild(starterItemColDiv);
        starterItemDiv.appendChild(starterPriceColDiv);
        startersDiv.appendChild(starterItemDiv);

        mainsDiv.classList.add("col-md-6");
        mainsHeading.textContent = "Mains";
        mainsDiv.appendChild(mainsHeading);

        firstRowDiv.appendChild(startersDiv);
        firstRowDiv.appendChild(mainsDiv);
        menuContent.appendChild(firstRowDiv);

        content.appendChild(menuContent);
    }

    const remove = (content)=>{
        content.removeChild(menuContent);
    }

    const add = (content)=>{
        content.appendChild(menuContent);
    }

    return{
        render, remove,add
    }

})();

export {menuPage}