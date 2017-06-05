var slideCounter = 0,
    slideItem = $("#slider figure"),
    totalSlide = slideItem.length;
function showImage(){
  let itemToShow = Math.abs(slideCounter%totalSlide);
  console.log(itemToShow);
  slideItem.removeClass("show");
  slideItem.eq(itemToShow).addClass("show");
}

const moveRight = ()=>{slideCounter++; showImage();}
const moveLeft = ()=>{slideCounter--; showImage();}
function slider(){
  setInterval(moveRight, 5000);
  $(".next").on("click", moveRight);
  $(".prev").on("click", moveLeft)
}
$(document).ready(slider);
