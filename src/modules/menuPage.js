
const menuPage = (()=>{

    let menuContent = document.createElement('div');
    let menuHeading = document.createElement('h2');
    
    let firstRowDiv = document.createElement('div')

    let startersDiv = document.createElement('div');
    let starterHeading = document.createElement('h4');
    let starterItemDiv = document.createElement("div");
    let starterItems = ["Kebab","Samosa","Pakora","Tikka"];
    let starterPrices = ["1.00","1.00","0.50","2.00"];
    let starterItemColDiv = document.createElement("div");
    let starterPriceColDiv = document.createElement("div");
    
    let mainsDiv = document.createElement('div');
    let mainsHeading = document.createElement('h4');
    let mainItemDiv = document.createElement('div');
    let mainItems = ["Korma","Biryani","Dhaal","Fish","Burger"];
    let mainPrices = ["10.00","12.00","8.00","8.00","5.00"];
    let mainItemColDiv = document.createElement("div");
    let mainPriceColDiv = document.createElement("div");

    let secondRowDiv = document.createElement('div');

    let desertDiv = document.createElement('div');
    let desertHeading = document.createElement('h4');
    let desertItemDiv = document.createElement('div');
    let desertItems = ["Sewiyan","Ghulab Jamun","Falooda","Kheer","Ice Cream"];
    let desertPrices = ["4.00","1.00","4.00","4.00","2.00"];
    let desertItemColDiv = document.createElement("div");
    let desertPriceColDiv = document.createElement("div");

    let drinksDiv = document.createElement('div');
    let drinksHeading = document.createElement('h4');
    let drinkItemDiv = document.createElement('div');
    let drinkItems = ["Soft Drink","Fresh Juice", "Lassi", "Chai"];
    let drinkPrices = ["£2.00","4.00","4.00","3.00"];
    let drinkItemColDiv = document.createElement("div");
    let drinkPriceColDiv = document.createElement("div");
    

    const render = (content)=>{
        menuContent.classList.add("container-fluid");
        menuHeading.textContent = "Menu";
        menuHeading.classList.add("text-center")
        menuContent.appendChild(menuHeading);

        firstRowDiv.classList.add("row");

        startersDiv.classList.add("col-md-6")
        starterHeading.textContent = "Starters";
        startersDiv.appendChild(starterHeading);
        addMenuItems(starterItems,starterPrices,starterItemColDiv,starterPriceColDiv,starterItemDiv);
        startersDiv.appendChild(starterItemDiv);

        mainsDiv.classList.add("col-md-6");
        mainsHeading.textContent = "Mains";
        mainsDiv.appendChild(mainsHeading);
        addMenuItems(mainItems,mainPrices,mainItemColDiv,mainPriceColDiv,mainItemDiv);
        mainsDiv.appendChild(mainItemDiv);

        firstRowDiv.appendChild(startersDiv);
        firstRowDiv.appendChild(mainsDiv);

        secondRowDiv.classList.add("row");

        desertDiv.classList.add("col-md-6");
        desertHeading.textContent = "Deserts";
        desertDiv.appendChild(desertHeading);
        addMenuItems(desertItems,desertPrices,desertItemColDiv,desertPriceColDiv,desertItemDiv);
        desertDiv.appendChild(desertItemDiv);

        drinksDiv.classList.add("col-md-6");
        drinksHeading.textContent = "Drinks";
        drinksDiv.appendChild(drinksHeading);
        addMenuItems(drinkItems,drinkPrices,drinkItemColDiv,drinkPriceColDiv,drinkItemDiv);
        drinksDiv.appendChild(drinkItemDiv);

        secondRowDiv.appendChild(desertDiv);
        secondRowDiv.appendChild(drinksDiv);

        
        menuContent.appendChild(firstRowDiv);
        menuContent.appendChild(secondRowDiv);
        content.appendChild(menuContent);
    }

    const remove = (content)=>{
        content.removeChild(menuContent);
    }

    const add = (content)=>{
        content.appendChild(menuContent);
    }

    const addMenuItems = (itemArray,priceArray,itemCol,priceCol,itemDiv)=>{
        itemDiv.classList.add("row");
        itemCol.classList.add("col-xs-6","w-50","menu-item");
        priceCol.classList.add("col-xs-6","w-50")
        for (let i=0;i<itemArray.length;i++){
            let item = document.createElement("p");
            let price = document.createElement("p");

            item.textContent = (`${itemArray[i]}`);
            price.textContent = `........ £${priceArray[i]}`;

            itemCol.appendChild(item);
            priceCol.appendChild(price);

        }
        itemDiv.appendChild(itemCol);
        itemDiv.appendChild(priceCol);
    }

    return{
        render, remove,add
    }

})();

export {menuPage}