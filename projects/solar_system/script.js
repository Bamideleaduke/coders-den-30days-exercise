// input
const input = document.querySelector("input");
// button
const btn = document.querySelector("button");
// image container
const globe = document.querySelector(".img");
// result container
const card = document.querySelector(".card");
// weight value
const weight = document.querySelector(".value");
// err notification
const notification = document.querySelector(".err");
// flex container
const planetDisplay = document.querySelector("container");
// globe image
const planetImg = document.querySelector("#earth");
// select 
const planetOpt = document.querySelector("#planet");
// targetted planet
const targetPlanet = document.querySelector(".planet");

// form
const form = document.querySelector("#weightCalc");

form.addEventListener("submit",(e) => {
    e.preventDefault()
})
// form

// console.log(planetOpt)
// console.log(planetOpt.children)
// console.log(globe)

let planet = "";
planetOpt.addEventListener("change",function () {
 planet = this.value
})

function showPlanet() {
    btn.addEventListener("click", () => { 
        if(input.value === undefined || input.value === ""){
            notification.classList.add("show")
            globe.classList.add("hide")
        }else{
            notification.classList.add("hide");
            globe.classList.add("show");           
            card.style.display = "initial";
            // card.classList.add("show")
            weight.textContent = input.value;
            targetPlanet.textContent = planet

            planetImg.src= `./assets/${planet.toLowerCase()}.png`
        }
    })

}
showPlanet()

// console.dir(planetImg)