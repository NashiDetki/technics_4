// let secInMin = 60;
// let minInHour = 60;
// console.log ('секудн в часе', secInMin * minInHour)
// let hourInDay = 24;
// console.log('секудн в сутак', secInMin*minInHour*hourInDay)
// let dayInYear = 365;
// let secInDay = secInMin*minInHour*hourInDay;
// let secInYear = secInMin*minInHour*hourInDay * dayInYear
// console.log('Секунд в году', secInYear)
// let Age = 13;
// console.log('мне', secInYear * Age, 'секунд')

// let name = "Emil"
// console.log(name)
let link_1 = document.querySelector('.link_1');
console.log(link_1)
let link_2 = document.querySelector(".link_2");
console.log(link_2)
let link_3 = document.querySelector(".link_3");
console.log(link_3)
let link_4 = document.querySelector(".link_4");
console.log(link_4)

const image = document.querySelector('.viewer__image')
console.log(image)
const description__title = document.querySelector('.description__title')
console.log(description__title)
const description__subtitle = document.querySelector('.description__subtitle')
console.log(description__subtitle)



function outConsole(name){
    console.log('metro', name)
}
outConsole('royal');
outConsole('lednik');
outConsole('43.986k');

link_1.addEventListener("click", function(){
    setImage('./img/sj100 air.jpg')
})
link_2.addEventListener("click", function(){
    setImage('./img/sj100 front.jpg')
})
link_3.addEventListener("click", function(){
    setImage('./img/sj100 left.jpg')
})
link_4.addEventListener("click", function(){
    setImage('./img/sj100 top.jpg')
})

image.src = "./img/sj100 front.jpg";

function setImage(link_image){
    image.src = link_image
}

setImage("./img/sj100 front.jpg")
