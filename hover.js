const right = document.querySelector(".right");
const left = document.querySelector(".left");
const container = document.querySelector(".container");

left.addEventListener('mouseover',function(){
    container.classList.add('active');
})
left.addEventListener('mouseout',function(){
    container.classList.remove('active');
})


right.addEventListener('mouseover',function(){
    container.classList.add('hover');
})
right.addEventListener('mouseout',function(){
    container.classList.remove('hover');
})