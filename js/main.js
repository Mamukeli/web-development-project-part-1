/* PART 3 : SERVICE SEARCH */

const searchBox = document.getElementById("searchService");

if (searchBox) {

    searchBox.addEventListener("keyup", () => {

        const value = searchBox.value.toLowerCase();

        const cards = document.querySelectorAll(".service-box");

        cards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "";
            }

            else {

                card.style.display = "none";

            }

        });

    });

}

/* PART 3 : ACCORDION */

const accordionBtn = document.querySelector(".accordion-btn");

if (accordionBtn) {

    accordionBtn.addEventListener("click", () => {

        const content = document.querySelector(".accordion-content");

        content.classList.toggle("show");

    });

}

/* PART 3 : SPECIAL OFFER MODAL */

const offerBtn = document.getElementById("offerBtn");

const offerModal = document.getElementById("offerModal");

const closeModal = document.getElementById("closeModal");

if (offerBtn && offerModal) {

    offerBtn.addEventListener("click", () => {

        offerModal.style.display = "flex";

    });

}

if (closeModal && offerModal) {

    closeModal.addEventListener("click", () => {

        offerModal.style.display = "none";

    });

}

/* PART 3 : LIGHTBOX GALLERY */

const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

if (galleryImages.length > 0) {

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.style.display = "flex";

            lightboxImg.src = image.src;

        });

    });

}

if (lightbox) {

    lightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });
}

/* PART 3 : LEAFLET MAP */

const mapContainer = document.getElementById("map");

if (mapContainer && typeof L !== "undefined") {

    const map = L.map("map").setView(

        [-33.9249, 18.4241],

        12

    );

    L.tileLayer(

        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

        {
            attribution:

            "&copy; OpenStreetMap contributors"
        }

    ).addTo(map);

    L.marker(

        [-33.9249, 18.4241]
    )

    .addTo(map)

    .bindPopup(

        "Boost Force Mobile Car Wash"
    )
    .openPopup();

    L.marker(

        [-33.8938, 18.5095]
    )

    .addTo(map)

    .bindPopup(

        "Century City Service Area"
    );
}

/* PART 3 : DYNAMIC SERVICES */

const services = [

{

name:"Exterior Wash",

price:"R80",

description:"Complete exterior vehicle cleaning."

},

{

name:"Interior Cleaning",

price:"R120",

description:"Interior dashboard cleaning and sanitizing."

},

{

name:"Vacuuming",

price:"R70",

description:"Deep vacuum cleaning."

},

{

name:"Wax and Polish",

price:"R180",

description:"Professional waxing and polishing."

},

{

name:"Full Vehicle Detailing",

price:"R350",

description:"Complete inside and outside detailing."

}

];


const container =

document.getElementById("dynamic-services");


if(container){

services.forEach(service=>{

container.innerHTML += `

<div class="service-box">

<h3>${service.name}</h3>

<p>${service.description}</p>

<p><strong>${service.price}</strong></p>

</div>

`;

});

}


/* PART 3 : ENQUIRY FORM */

const enquiryForm =

document.getElementById("enquiryForm");


if(enquiryForm){

enquiryForm.addEventListener(

"submit",

function(e){

e.preventDefault();


const phone =

document.getElementById("phone").value;


if(phone.length !== 10){

alert(

"Please enter a valid phone number."

);

return;

}


const servicePrice =

document.getElementById("service").value;


const response =

document.getElementById("responseBox");


response.innerHTML =

`
<h3>

Enquiry Submitted Successfully

</h3>

<p>

Estimated Cost :

R${servicePrice}

</p>

<p>

Availability :

Available on your selected date.

</p>

`;

});

}

/* PART 3 : CONTACT FORM AJAX */

const contactForm =

document.querySelector(".contact-form");


if(contactForm){

contactForm.addEventListener(

"submit",

function(e){

e.preventDefault();


alert(

"Message sent successfully!"

);


this.reset();

});

}