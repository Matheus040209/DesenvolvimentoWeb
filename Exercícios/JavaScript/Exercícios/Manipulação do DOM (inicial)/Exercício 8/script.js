const menu = document.getElementsByClassName ("menu");
const btnMenu = document.getElementById ("btnMenu")

btnMenu.addEventListener ("click", function(){
    for (let item of menu){
        item.classList.toggle("hidden");
    }
});