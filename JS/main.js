let lis=document.querySelectorAll(".bullets li");
lis.forEach(element => {
    element.addEventListener("click",function(){
        lis.forEach(e => { e.classList.remove("active")})
        element.classList.toggle("active")
    })
    
});