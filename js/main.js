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