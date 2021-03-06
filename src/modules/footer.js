

const footer = (()=>{

    let footerContent = document.createElement('footer');
    let topContainer = document.createElement('div');

    let contentRow = document.createElement('div');

    let col1 = document.createElement('div')
    let footerHeading = document.createElement('h5');
    let footerInfo = document.createElement('p');
    let locationsHeading = document.createElement('h5');
    let locationInfo = document.createElement('p');

    let col2 = document.createElement('div');
    let siteMapHeading = document.createElement('h5');
    let linksList = document.createElement('ul');
    let linkTitles = ["Home", "Menu","Contact"];
    let socialsHeading = document.createElement('h5');
    let socialsIcons = document.createElement('h5');
    let faceBookIcon = document.createElement('span');
    let twitterIcon = document.createElement('span');
    let instaIcon = document.createElement('span');
    

    const render = (content)=>{
        footerContent.classList.add("page-footer", "font-small","pt-4","bg-warning");
        
        topContainer.classList.add("container-fluid","text-center","text-md-left");
        
        contentRow.classList.add("row");
        topContainer.appendChild(contentRow);
        
        col1.classList.add("col-md-6","mt-md-0","mt-3");
        footerHeading.textContent = "About";
        col1.appendChild(footerHeading);
        footerInfo.textContent = "MyResturant is a conceptual resturant that serves traditional Pakistani cuisine. We pride ourselves on our flavour, quality and service. We provide dine in, take-away and catering services";
        col1.appendChild(footerInfo);
        locationsHeading.textContent = "Locations";
        col1.appendChild(locationsHeading);
        locationInfo.textContent = "We are a global brand with resturants in many major cities. Our central headquarters and largest chain is in Dubai."
        col1.appendChild(locationInfo);
        contentRow.appendChild(col1);


        col2.classList.add("col-md-6","mt-md-0","mt-3");
        siteMapHeading.textContent = "Site Map";
        col2.appendChild(siteMapHeading);
        for (let i =0 ; i<linkTitles.length;i++){
            let listItem = document.createElement('li');
            let link = document.createElement('a')
            link.textContent = linkTitles[i];
            listItem.appendChild(link);
            linksList.appendChild(listItem);
        }
        linksList.classList.add("list-unstyled");
        col2.appendChild(linksList);

        socialsHeading.textContent = "Social Media";
        col2.appendChild(socialsHeading);
        faceBookIcon.classList.add("fab","fa-facebook","socials-icon");
        socialsIcons.appendChild(faceBookIcon);
        twitterIcon.classList.add("fab","fa-twitter","socials-icon");
        socialsIcons.appendChild(twitterIcon);
        instaIcon.classList.add("fab","fa-instagram","socials-icon");
        socialsIcons.appendChild(instaIcon);
        col2.appendChild(socialsIcons);
        
        
        contentRow.appendChild(col2);

        footerContent.appendChild(topContainer);
        content.appendChild(footerContent);
    }

    const add = (content)=>{
        content.appendChild(footerContent);
    }

    const remove = (content)=> {
        content.removeChild(footerContent);
    }

    return {render,add,remove}

})();


export{footer}