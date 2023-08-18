$(document).ready(function () {
  $('.slick-slider').slick({
      prevArrow: '<button type="button" class="slick-prev">◄</button>',
      nextArrow: '<button type="button" class="slick-next">►</button>',
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
  });
});


var modal = document.getElementById("myModal");
var btn = document.getElementById("saberMasBtn");
var cerrarBtn = document.getElementById("cerrarModal");

btn.onclick = function () {
    modal.style.display = "block";
}

cerrarBtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

document.getElementById("reservarBtn").addEventListener("click", function () {
    var numeroTelefono = "123456789";  // Reemplaza con el número de teléfono de WhatsApp
    var mensaje = "¡Hola! Quiero hacer una reserva.";

    // Reemplaza el código de país en el número de teléfono si es necesario
    numeroTelefono = numeroTelefono.replace("+", "");
    numeroTelefono = "52" + numeroTelefono;  // Ejemplo: 52 para México

    // Codifica el mensaje para la URL
    mensaje = encodeURIComponent(mensaje);

    // Genera el enlace de WhatsApp
    var enlaceWhatsApp = "https://wa.me/" + numeroTelefono + "?text=" + mensaje;

    // Abre la ventana de WhatsApp
    window.open(enlaceWhatsApp);
});



