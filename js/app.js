const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const slides = document.querySelectorAll('.slide')
const auto = true;
const time = 5000;
let slideInter;


const nextSlide = ()=>{
    //get the current
    const current = document.querySelector('.current')
    
    //current.classList.remove('current');
    
    if(current.nextElementSibling){
            current.nextElementSibling.classList.add('current')
       }
    else{
        slides[0].classList.add('current')
    }
    
    setTimeout(()=> current.classList.remove('current'))
}
const prevSlide = ()=>{
    //get the current
    const current = document.querySelector('.current')
    
    //current.classList.remove('current');
    
    if(current.previousElementSibling){
            current.previousElementSibling.classList.add('current')
       }
    else{
        slides[slides.length-1].classList.add('current')
    }
    
    setTimeout(()=> current.classList.remove('current'))
}

next.addEventListener('click', ()=>{
    nextSlide()
    if(auto){
        clearInterval(slideInter);
        slideInter = setInterval(nextSlide, time)
    }
})
prev.addEventListener('click', ()=>{
    prevSlide()
     if(auto){
        clearInterval(slideInter);
        slideInter = setInterval(nextSlide, time)
    }
})


//this is the easy way 

/*next.addEventListener('click', ()=>{
    const current = document.querySelector('.current');
    
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current')
    } else{
        slides[0].classList.add('current')
    }
    
    setTimeout(()=> current.classList.remove('current'));
    
});

prev.addEventListener('click', ()=>{
    const current = document.querySelector('.current');
    
    if(current.previousElementSibling){
            current.previousElementSibling.classList.add('current')
       }
    else{
        slides[slides.length-1].classList.add('current')
    }
    
    setTimeout(()=> current.classList.remove('current'))
});*/

if(auto){
    slideInter = setInterval(nextSlide, time)
}









