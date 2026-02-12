let nivel = Number(process.argv[2]);

if (nivel>=1 && nivel<=10){
    console.log("Nivel iniciante");
}else if (nivel>=11 && nivel<=30){
    console.log("Nivel intermediario");
}else{
    console.log("Nivel veterano");
}