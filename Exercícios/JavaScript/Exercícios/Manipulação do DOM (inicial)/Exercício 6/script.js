const body = document.getElementsByClassName("body")
const btnTrocarTema = document.getElementById ("btnTrocarTema")

btnTrocarTema.addEventListener ("click", function(){
    for (let item of body){
        item.classList.toggle("dark");
    }
});