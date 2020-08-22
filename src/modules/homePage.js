

const homePage = (()=> {
    
    let homeContent = document.createElement('div');
    let homeHeading = document.createElement('h1');
    let image = document.createElement('img')

    const render = (content)=>{

        homeHeading.textContent = "A taste of Luxary"
        homeContent.appendChild(homeHeading);

        image.src = "img/pai-thai-madinat-jumeirah.jpg";
        homeContent.appendChild(image)


        content.appendChild(homeContent);
    }


    return {
        render,
    }

})();

export {homePage}