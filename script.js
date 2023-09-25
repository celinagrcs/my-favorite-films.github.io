document.addEventListener("DOMContentLoaded", function () {
  var plusIcons = document.querySelectorAll(".bi-plus-lg");
  var tableBody = document.querySelector("tbody");

  plusIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      var row = icon.closest("tr");
      var accordion = row.nextElementSibling;
      var content = accordion.querySelector(".accordion-content");

      // Muestra u oculta el acordeón actual y su contenido de texto
      if (accordion.style.display === "none" || accordion.style.display === "") {
        accordion.style.display = "table-row"; // Muestra el acordeón
        if (content) {
          content.style.display = "table-row"; // Muestra el contenido de texto si existe
        }
      } else {
        accordion.style.display = "none"; // Oculta el acordeón
        if (content) {
          content.style.display = "none"; // Oculta el contenido de texto si existe
        }
      }
    });
  });
});


  // var movieForm = document.getElementById("movieForm");

  // movieForm.addEventListener("submit", function (e) {
  //   e.preventDefault(); // Evita que la página se recargue al enviar el formulario

  //   // Captura los valores del formulario
  //   var title = document.getElementById("title").value;
  //   var director = document.getElementById("director").value;
  //   var year = document.getElementById("year").value;
  //   var genre = document.getElementById("genre").value;
  //   var image = document.getElementById("image").value;
  //   var description = document.getElementById("description").value;

  //   // Define la estructura HTML de una fila de ejemplo sin el acordeón
  //   var rowTemplate = `
  //     <tr>
  //       <td>${title}</td>
  //       <td>${director}</td>
  //       <td>${year}</td>
  //       <td>${genre}</td>
  //       <td><i class="bi bi-plus-lg"></i></td>
  //     </tr>
  //   `;

  //   // Crea una nueva fila en la tabla basada en la plantilla sin el acordeón
  //   var newRow = document.createElement("tr");
  //   newRow.innerHTML = rowTemplate;

  //   // Agrega la nueva fila a la tabla
  //   tableBody.appendChild(newRow);

  //   // Define la estructura HTML del acordeón
  //   var accordionTemplate = `
  //     <tr class="accordion">
  //       <td colspan="5">
  //         <div class="accordion-content">
  //           <div class="txt">
  //             <h2>${title}</h2>
  //             <p>${description}</p>
  //           </div>
  //           <img class="img" src="${image}" width="700" alt="${title}">
  //         </div>
  //       </td>
  //     </tr>
  //   `;

  //   // Crea una nueva fila para el acordeón
  //   var accordionRow = document.createElement("tr");
  //   accordionRow.innerHTML = accordionTemplate;

  //   // Agrega la nueva fila del acordeón a la tabla después de la fila de la película
  //   tableBody.appendChild(accordionRow);

  //   // Limpia los campos del formulario
  //   movieForm.reset();
  // });

