//creo l'array con le img
const imagesArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

//creo elemento dinamico tag img
let imagesTags = '';

//creo shortcut per queryselector
const el = document.querySelector.bind(document);

//creo la const  che racchiude il div contenitore delle img
const slider =  el ('.slider');

//const slider = document.querySelector ('.slider');

for (let index = 0; index < imagesArray.length; index++) {
  imagesTags += `<img class="item" src="img/${imagesArray[index]}" alt="${imagesArray[index]}">` ;
}

//di default si deve vedere la prima foto, con indice 0
let counterimages = 0;

const next = el ('.down');
const previous = el ('.up');

//di default non ci deve essere la scelta previous
previous.classList.add('hide');

// al div contenitore apporto gli img tag
slider.innerHTML = imagesTags;

//creo la collection di elementi HTML che hanno classe item
const items = document.getElementsByClassName('item');

//aggiungo al primo elemento della collection la classe active 
items[0].classList.add('active');

//al click, spostandosi alla foto successiva, tramite il contatore tolgo la classe active dalla foto visitata e la aggiungo alla successiva
next.addEventListener('click', function(){
  items[counterimages].classList.remove('active');
  items[++counterimages].classList.add('active');
//dalla seconda foto in poi si ripristina la scelta previous
  previous.classList.remove('hide');
//quando il numero del contatore è uguale a quello dell'array va nascosto il tasto next
  if(counterimages === imagesArray.length) counterimages = 0
    /*next.classList.add('hide');*/
    //const imagesArrayBis = [...imagesArray];
    //console.log(imagesArrayBis);
    //imagesArray.push(imagesArrayBis);
    //counterimages.reset[0];
    //items[0].classList.add('active');
    /*items[counterimages].classList.remove('active');
    items[++counterimages].classList.add('active');*/
    //items[4].classList.add('hide');
    //items = document.getElementsByClassName('item');
  
;


//allo stasso modo agisco sul bottone previous
previous.addEventListener('click', function(){
  items[counterimages].classList.remove('active');
  items[--counterimages].classList.add('active');

  next.classList.remove('hide');
  /*if(counterimages === 0) {
    previous.classList.add('hide');
  }*/
});