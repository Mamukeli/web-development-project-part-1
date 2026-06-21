const searchBox = document.getElementById("searchService");

if (searchBox) { // Added a safety check to ensure element exists
  searchBox.addEventListener("keyup", () => {
    const value = searchBox.value.toLowerCase();
    const cards = document.querySelectorAll(".service-box");

    cards.forEach(card => {
      // Use textContent for better performance and to include hidden text
      let text = card.textContent.toLowerCase();

      if (text.includes(value)) {
        card.style.display = ""; // Reverts to CSS default (block, flex, etc.)
      } else {
        card.style.display = "none";
      }
    });
  });
}
/* =======================================
   PART 3 : ACCORDION FUNCTION
   Opens and closes additional information
======================================= */

const accordionBtn = document.querySelector(".accordion-btn");

if (accordionBtn) {

    accordionBtn.addEventListener("click", function () {

        const content = document.querySelector(".accordion-content");

        content.classList.toggle("show");

    });

}

/* =======================================
PART 3 : MODAL POPUP
======================================= */

const offerBtn = document.getElementById("offerBtn");

const offerModal = document.getElementById("offerModal");

const closeModal = document.getElementById("closeModal");


if(offerBtn){

offerBtn.addEventListener("click",()=>{

offerModal.style.display="flex";

});

}


if(closeModal){

closeModal.addEventListener("click",()=>{

offerModal.style.display="none";

});

}

/* =======================================
PART 3 : LIGHTBOX GALLERY
======================================= */

const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");


galleryImages.forEach(image => {

image.addEventListener("click", function(){

lightbox.style.display = "flex";

lightboxImg.src = this.src;

});

});


if(lightbox){

lightbox.addEventListener("click", function(){

lightbox.style.display = "none";

});

}

/* =======================================
PART 3 : LEAFLET MAP
======================================= */

const mapContainer = document.getElementById("map");


if(mapContainer){

const map = L.map("map").setView(

[-33.9249,18.4241],

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

[-33.9249,18.4241]

)

.addTo(map)

.bindPopup(

"Boost Force Mobile Car Wash - Cape Town CBD"

)

.openPopup();



L.marker(

[-33.8938,18.5095]

)

.addTo(map)

.bindPopup(

"Century City Service Area"

);

}