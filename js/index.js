let img = document.querySelector(".bg")
let text = document.querySelector(".loading-text")

let load = 0;
let int = setInterval(blurring,30);
function blurring(){
    load++;
   if(load>99){
       clearInterval(int)
   }
   text.innerHTML = `${load}%`;
   if(load<50){
    text.style.opacity = 1 
   }else if(load<75){
       text.style.opacity = 0.5;
   }else if(load<99){
       text.style.opacity = 0.3;
   }else{
       text.style.opacity = 0;
   }
   let blurpx = 100-load;
   img.style.filter = `blur(${blurpx}px)`
   if(blurpx == 0){
       text.innerHTML = `Fuck off I am coding`
       text.style.opacity = 0.5;
       text.style.color = grey;
   }
   
}