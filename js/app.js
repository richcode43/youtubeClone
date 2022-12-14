let openBar = document.querySelector('.openSideBar');
let closeBar = document.querySelector('.closeSideBar');
let mainBar = document.getElementById("mySideBar");
let sideHeader = document.querySelector('.header');
let closeAd = document.querySelector('.close-ad');
let advert = document.querySelector('.banner');


closeAd.addEventListener('click', function(){
    advert.style.display = 'none';
    // advert.innerHTML = '<style>' + '.banner{display:none;}' + '</style>';
})
openBar.addEventListener('click',function(){
    mainBar.style.width = "250px";
})
closeBar.addEventListener('click',function(){
    mainBar.style.width ='0';
    sideHeader.style.display = "none";
})