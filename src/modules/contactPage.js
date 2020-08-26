


const contactPage = (()=>{
    

    let contactContent = document.createElement('div');
    let contactHeading = document.createElement('h2');

    let firstRow = document.createElement('div');
    let contactCol = document.createElement('div');
    let detailsCol = document.createElement('div');

    let phoneContact = document.createElement('p');
    let phoneDetail = document.createElement('p');
    let emailContact = document.createElement("p");
    let emailDetail = document.createElement("p");
    let addressContact = document.createElement('p');
    let addressDetail = document.createElement('p')

    
    const render = (content)=>{
        contactContent.classList.add("container-fluid")
        contactContent.id = "contact-content"

        contactHeading.classList.add("text-center")
        contactHeading.textContent = "Contact";
        contactContent.appendChild(contactHeading);

        firstRow.classList.add("row");
        contactCol.classList.add("col-xs-6","w-25","contact-item");
        detailsCol.classList.add("col-xs-6");

        phoneContact.textContent = "Phone: ";
        phoneDetail.textContent = "0000000000";
        contactCol.appendChild(phoneContact);
        detailsCol.appendChild(phoneDetail);

        emailContact.textContent = "Email: ";
        emailDetail.textContent = "adnangondal1@hotmail.com";
        contactCol.appendChild(emailContact);
        detailsCol.appendChild(emailDetail);

        addressContact.textContent = "Address: ";
        addressDetail.textContent = "43 Al Ain Road 14513 Dubai Emirates";
        contactCol.appendChild(addressContact);
        detailsCol.appendChild(addressDetail);


        firstRow.appendChild(contactCol);
        firstRow.appendChild(detailsCol);
        contactContent.appendChild(firstRow);



        content.appendChild(contactContent);
    }

    const remove = (content)=>{
        content.removeChild(contactContent);
    }

    return{
        render,remove
    }


})();

export {contactPage}