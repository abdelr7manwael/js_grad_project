// navbar toggle 
navBtn = document.querySelector("nav .navbar-toggler");
navMenu = document.querySelector("nav .navbar-collapse")

navBtn.addEventListener('click', ()=>{
    if(navMenu.classList.contains("show")){
        navMenu.classList.remove("show")
    }else{
        navMenu.classList.add("show")
    }
})


// lightbox

lightboxBtn = document.querySelectorAll(".lightbox-btn");
lightboxBox = document.querySelector("#lightbox-box");
lightboxClose = document.querySelector("#lightbox-close");

lightboxBtn.forEach(l => {
    l.addEventListener('click', ()=>{
        lightboxBox.classList.remove('d-none');
    })    
});


lightboxClose.addEventListener('click', ()=>{
    lightboxBox.classList.add('d-none');
})


// menu section navs & tabs 

var tabs = document.querySelectorAll(".menu-section .nav-item .nav-link");
var pages = document.querySelectorAll(".menu-section .pages .page")

tabs.forEach((t, index) =>{
    t.addEventListener('click', ()=>{
        tabs.forEach(subt => {
            subt.classList.remove('active')
        });

        pages.forEach(p => {
            p.classList.add('d-none')
        });
        t.classList.add('active');
        pages[index].classList.remove('d-none')


    })    
})