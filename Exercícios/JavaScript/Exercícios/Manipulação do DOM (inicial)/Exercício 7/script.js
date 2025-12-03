const imagens = document.querySelectorAll(".imagens img");
const principal = document.getElementById("principal");

imagens.forEach(function(img) {
    img.addEventListener("click", function() {
        principal.src = img.src;
    });
});