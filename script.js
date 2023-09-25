document.addEventListener("DOMContentLoaded", function () {
  var plusIcons = document.querySelectorAll(".bi-plus-lg");
  var tableBody = document.querySelector("tbody");

  plusIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      var row = icon.closest("tr");
      var accordion = row.nextElementSibling;
      var content = accordion.querySelector(".accordion-content");

      
      if (accordion.style.display === "none" || accordion.style.display === "") {
        accordion.style.display = "table-row"; 
        if (content) {
          content.style.display = "table-row"; 
        }
      } else {
        accordion.style.display = "none"; 
        if (content) {
          content.style.display = "none";
        }
      }
    });
  });
});


