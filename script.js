const slideContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-content');
const slideLeft = document.querySelector('.left-content');

const upBtn = document.querySelector('.up-btn');
const downBtn = document.querySelector('.down-btn');

const slideCount = slideRight.querySelectorAll('div').length;
// console.log(slideCount);
let activeIndex = 0;

upBtn.addEventListener('click',()=>changeImg("up"));
downBtn.addEventListener('click',()=>changeImg("down"));

function changeImg(direction){
    const slideHeight = slideContainer.clientHeight;
    if(direction == "up"){
        activeIndex++;
        if(activeIndex > slideCount-1){
            activeIndex = 0;
        }
    }else if(direction == "down"){
        activeIndex--;
        if(activeIndex < 0){
            activeIndex = slideCount-1;
        }
    }
    // console.log(slideHeight);
    slideLeft.style.transform= `translateY(-${activeIndex*slideHeight}px)`;
    slideRight.style.transform= `translateY(-${activeIndex*slideHeight}px)`;
}