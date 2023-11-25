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
            subt.classList.remove('active');
        });

        pages.forEach(p => {
            p.classList.add('d-none');
        });
        t.classList.add('active');
        pages[index].classList.remove('d-none')


    })    
})


// slider 1 (events)

var slideIndex = 0
showSlide(slideIndex);
function changeSlide(n){
    // recall function
    showSlide(slideIndex + n)    
}
function showSlide(n){
    let slides = document.querySelectorAll('[data-slider-item]');
    let counter = document.querySelector('[data-slider-counter]');
    

    if(n > slides.length - 1){slideIndex = 0}
    else if(n < 0){slideIndex = Number(slides.length - 1)}
    else{ slideIndex = n; }
    slides.forEach(img => {
        img.classList.add('d-none');
    });

    slides[slideIndex].classList.replace('d-none', 'd-block');
    counter.innerHTML = `${slideIndex + 1}/${slides.length}`
}


// slider 2 (swipe)


function do_swipe(counter){
    var slides = document.querySelectorAll('[data-slide-swipe]');
    var currentSlide, currentSlideIndex;
    slides.forEach((s, index) => {
        if (s.classList.contains('d-flex')){
            currentSlide = s;
            currentSlideIndex = index;
        }

        s.classList.remove('d-flex');  
        s.classList.add('d-none');
    });

// ---------------------------------------------------------------------------------------
    var nextSlideIndex;
    if(counter == 1){ 
        if((currentSlideIndex + 1) > slides.length - 1 ){ nextSlideIndex = 0; } 
        else { nextSlideIndex = currentSlideIndex + 1; }
    }
    else if(counter == -1)
    {
        if((currentSlideIndex - 1) < 0 ){ nextSlideIndex = slides.length - 1; } 
        else { nextSlideIndex = currentSlideIndex - 1; }
    } 
// ---------------------------------------------------------------------------------------
    
    nextSlide = slides[nextSlideIndex];
    slides[nextSlideIndex].classList.remove('d-none');
    slides[nextSlideIndex].classList.add('d-flex');
    if(counter == 1){ 
        nextSlide.classList.remove("swipe-right"); 
        nextSlide.classList.add("swipe-left"); 
    } 
    else if(counter == -1){ 
        nextSlide.classList.remove("swipe-left"); 
        nextSlide.classList.add("swipe-right"); 
    }


}