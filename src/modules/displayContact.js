const displayContact = function () {
    const mainContainer = document.querySelector(".main-container");
    
    const contactHeader = document.createElement("div");
    contactHeader.classList.toggle("contact-header");

    const contactHeaderText = document.createElement("p");
    contactHeaderText.classList.toggle("contact-header-text");
    const contactHeaderInnerText = document.createTextNode("Contact Us");

    contactHeaderText.appendChild(contactHeaderInnerText);
    contactHeader.appendChild(contactHeaderText);

    const contactInfo = document.createElement("div");
    contactInfo.classList.toggle("contact-info");

    const addressText = document.createElement("p");
    addressText.classList.toggle("info-text");
    const addressInnerText = document.createTextNode("Address: Some Location");
    addressText.appendChild(addressInnerText);

    const phoneText = document.createElement("p");
    phoneText.classList.toggle("info-text");
    const phoneInnerText = document.createTextNode("Phone Number: XXX-XXX-XXXX");
    phoneText.appendChild(phoneInnerText);

    contactInfo.appendChild(addressText);
    contactInfo.appendChild(phoneText);

    mainContainer.appendChild(contactHeader);
    mainContainer.appendChild(contactInfo);
}

export default displayContact;