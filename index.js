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
    var numeroTelefono = "123456789";  
    var mensaje = "¡Hola! Quiero hacer una reserva.";

    numeroTelefono = numeroTelefono.replace("+", "");
    numeroTelefono = "54" + numeroTelefono;  

   
    mensaje = encodeURIComponent(mensaje);

   
    var enlaceWhatsApp = "https://wa.me/" + numeroTelefono + "?text=" + mensaje;

    
    window.open(enlaceWhatsApp);
});



