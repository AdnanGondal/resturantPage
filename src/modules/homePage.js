

const homePage = (()=> {
    
    let homeContent = document.createElement('div');
    let homeHeading = document.createElement('h4');
    let image = document.createElement('img');
    let finestHeading = document.createElement('h4');
    let foodImage = document.createElement('img');
    let cateringHeading = document.createElement("h4");
    let cateringImage = document.createElement('img');

    const render = (content)=>{


        homeContent.classList.add("container-fluid","text-center");
        homeHeading.textContent = "A taste of luxary ..."
        homeContent.appendChild(homeHeading);

        image.src = "img/pai-thai-madinat-jumeirah.jpg";
        image.classList.add("img-fluid");
        homeContent.appendChild(image);

        finestHeading.textContent = "The finest cuisine";
        homeContent.appendChild(finestHeading);

        foodImage.src = "img/Food-And-People-Of-Pakistan.jpg";
        foodImage.classList.add("img-fluid");
        homeContent.appendChild(foodImage);

        cateringHeading.textContent = "Catering for all occassions";
        homeContent.appendChild(cateringHeading);

        cateringImage.src = "img/catering.jpg";
        cateringImage.classList.add("img-fluid");
        homeContent.appendChild(cateringImage);


        content.appendChild(homeContent);
    }


    return {
        render,
    }

})();

export {homePage}