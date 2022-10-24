const slider = document.querySelector('.slider');
const thumbs = document.querySelector('.thumbs');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const numImages = 5;
let counterImages = 0;
let sliderHtml = '';
let thumbsHtml = '';

for(let i = 1; i <= numImages; i++){
  sliderHtml += `
      <img  class="item" src="img/0${i}.jpg" alt="">
  `;
  thumbsHtml += `
      <img  class="item-thumb" src="img/0${i}.jpg" alt="">
  `;
}

slider.innerHTML = sliderHtml;
thumbs.innerHTML = thumbsHtml;

const listImages = document.getElementsByClassName('item');
const listthumbs = document.getElementsByClassName('item-thumb');

listImages[counterImages].classList.add('active');
listthumbs[counterImages].classList.add('active');

prev.addEventListener('click',function(){
  nextPrev(false);
})

next.addEventListener('click',function(){
  nextPrev(true);
})

function nextPrev(isNext){
  listImages[counterImages].classList.remove('active');
  listthumbs[counterImages].classList.remove('active');
  if(isNext){
    counterImages--;
    if(counterImages < 0) counterImages = numImages - 1;
  } else {
    counterImages++;
    
    if(counterImages === numImages) counterImages = 0;
  }
  listImages[counterImages].classList.add('active');
  listthumbs[counterImages].classList.add('active');
}

//aggiunte variabili per l'autoplay del carousel e per l'area del mouseover
let selectedPic;
const container = document.querySelector('.container');

//aggiunta timing function per l'autoplay del carousel
selectedPic = setInterval(nextPrev,2500);

//aggiunto mouseover per interrompere l'autoplay del carousel e mouseout per farlo riprendere
container.addEventListener('mouseover', function(){
  clearInterval(selectedPic);
});
container.addEventListener('mouseout', function(){
  selectedPic = setInterval(nextPrev,2500);
});