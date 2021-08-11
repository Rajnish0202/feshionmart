let navBar = document.querySelector(".navbar");
let menuBar = document.querySelector("#menu-bar");
let close = document.querySelector("#close");
let items = document.querySelectorAll(".deal .box h3");

// --------------NavBarToggle---------------

menuBar.addEventListener("click",function(){
 navBar.classList.toggle("active");
})

close.addEventListener("click",function(){
 navBar.classList.remove("active");
})

// --------------NavBarToggle---------------

// -----------------------Header-javaScript------------------------
window.onscroll = function(){
  navBar.classList.remove("active");
 if(window.scrollY > 100){
  document.querySelector("header").classList.add("active");
 }
 else{
   document.querySelector("header").classList.remove("active");
  }
 }

// -----------------------Header-javaScript------------------------

 // --------------------------Theme-Toggler--------------------------

let themeToggler = document.querySelector("#theme-toggler");

themeToggler.addEventListener("click",function(){
 themeToggler.classList.toggle("fa-sun");
 if(themeToggler.classList.contains("fa-sun")){
  document.querySelector("body").classList.add("active");
 }else{
   document.querySelector("body").classList.remove("active");
 }
})

 // --------------------------Theme-Toggler--------------------------

 // --------------------------Product-Slider-Toggler--------------------------

       var swiper = new Swiper(".product-slider", {
        slidesPerView:3,
        loop:true,
        spaceBetween:10,
        autoplay:{
         delay:4000,
         disableOnInteraction:false,
        },
        navigation: {
         nextEl:".swiper-button-next",
         prevEl:".swiper-button-prev",
        },
        breakpoints:{
         0:{
          slidesPerView:1,
         },
         550:{
          slidesPerView:2,
         },
         800:{
          slidesPerView:2,
         },
         1000:{
          slidesPerView:3,
         },
        },

      });

 // --------------------------Product-Slider-Toggler-----------------------

 // -------------------------Featured-Slider-Toggler------------------------

 document.querySelectorAll(".small-image-1").forEach(function(images){
   images.addEventListener("click",function(){
     document.querySelector(".big-image-1").src = images.src;
   });
 });
 document.querySelectorAll(".small-image-2").forEach(function(images){
   images.addEventListener("click",function(){
     document.querySelector(".big-image-2").src = images.src;
   });
 });
 document.querySelectorAll(".small-image-3").forEach(function(images){
   images.addEventListener("click",function(){
     document.querySelector(".big-image-3").src = images.src;
   });
 });

 // -------------------------Featured-Slider-Toggler------------------------

 // -------------------------Deal-Count-Down----------------------

let countDate = new Date("aug 15, 2021 00:00:00").getTime();


function countDown(){
  let now = new Date().getTime();
  // console.log(now);
  gap = countDate - now;

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;

  let d = Math.floor(gap / (days));
  let h = Math.floor((gap % (days)) / (hours));
  let m = Math.floor((gap % (hours)) / (minutes));
  let s = Math.floor((gap % (minutes)) / (seconds));

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;

let values = [d,h,m,s];
  function format(item){
    if(item<10){
      return(item = `0${item}`);
    }   
      return item;
    }
    items.forEach(function(item,index){
      item.innerHTML = format(values[index]);
    });
  }
setInterval(function(){
  countDown()
},1000);
 // -------------------------Deal-Count-Down----------------------

 // --------------------------Review-Slider-Toggler--------------------------

       var swiper = new Swiper(".review-slider", {
        slidesPerView:3,
        loop:true,
        spaceBetween:10,
        autoplay:{
         delay:4000,
         disableOnInteraction:false,
        },
        breakpoints:{
         0:{
          slidesPerView:1,
         },
         550:{
          slidesPerView:2,
         },
         800:{
          slidesPerView:2,
         },
         1000:{
          slidesPerView:2,
         },
        },

      });

 // --------------------------Review-Slider-Toggler-----------------------

//  console.log(items);