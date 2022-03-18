function mobileMenu(){
    if (document.getElementById("menu-lateral").style.display == "flex"){
        document.getElementById("menu-lateral").style.display = "none";
    }else{
        document.getElementById("menu-lateral").style.display = "flex"
    }
}
document.getElementById("menu-icon").addEventListener("click",mobileMenu)
document.getElementById("xmark").addEventListener("click",mobileMenu)