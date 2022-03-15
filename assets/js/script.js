function mobileMenu(){
    if (document.getElementById("menu-lateral").style.display == "block"){
        document.getElementById("menu-lateral").style.display = "none";
    }else{
        document.getElementById("menu-lateral").style.display = "block"
    }
}
document.getElementById("menu-icon").addEventListener("click",mobileMenu)