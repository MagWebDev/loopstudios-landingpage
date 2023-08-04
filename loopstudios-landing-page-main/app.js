const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("close");
const navList = document.getElementById("menu");

hamburger.addEventListener('click', function(){
    console.log('clicked')
    navList.classList.toggle('active')
    closeIcon.style.display="block";
})

closeIcon.addEventListener('click', function(){
    navList.classList.toggle('active')
    closeIcon.style.display="none";
})