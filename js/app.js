let openBar = document.querySelector('.menu-icon');
let closeBar = document.querySelector('.closeSideBar');
let sideBar = document.querySelector('.sidebar-toggle');

let closeAd = document.querySelector('.close-ad');
let advert = document.querySelector('.banner');
let closeShorts = document.querySelector('.close-shorts');
let shortsContainer = document.getElementById('shorts');


closeAd.addEventListener('click', function(){
    advert.style.display = 'none';
})
openBar.addEventListener('click',function(){
    sideBar.style.display = "flex";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
})
closeBar.addEventListener('click',function(){
    sideBar.style.display = "none";
})
closeShorts.addEventListener('click', function(){
    shortsContainer.style.display = 'none';
})

