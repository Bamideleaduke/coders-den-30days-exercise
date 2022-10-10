// body
const body = document.querySelector("body");
body.style.display = "grid";
body.style.placeContent = "center";
body.style.textAlign = "center";
// body

// author
let author = document.querySelector("#author");
author.innerHTML = author.innerHTML.replace(/\d+/g,"<span id='yr'>2022</span>");
let year = document.getElementById("yr");
year.style.fontSize = "3rem"
setInterval(function () {
  const i = Math.floor(Math.random() *col.length);
    year.style.color = col[i]
},1000)
// author

// title
const title = document.querySelector("#title");
let div = "<div>...</div>";
let dd = "<h4>Yo</h4>";
title.style.textDecoration = "underline";

// title

// date
const date = document.querySelector(".date");
date.textContent = new Date().toGMTString();
date.style.backgroundColor = "purple"
date.style.padding = "0.5rem 1rem"
date.style.fontSize = "1rem"
date.style.display = "inline"
// const hexVal = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const col = ["red","yellow","orange","green"]

// changing background color at interval 
setInterval(function(){
    const i = Math.floor(Math.random() *col.length);
    date.style.backgroundColor = col[i]
    // let hex ='#'
    // for (let i = 0; i < 6; i++) {
    //     const index = parseInt(Math.random()*hexVal.length);
    //     hex += hexVal[index];
    //     date.style.backgroundColor = hex;   
    // }
},1000)
// date

// list of challenge
const menu = document.querySelector("ul");
menu.style.listStyleType = "none";
menu.style.marginTop = "3rem"

const challenge = document.querySelectorAll("li");
// changing colors for each class name
challenge.forEach((title, i) => {
    title.style.marginBottom = '2px';
    title.style.padding = '1rem';
    // 
    if (title.classList.contains("completed")) {
      title.style.backgroundColor = 'green'
    } else if(title.classList.contains("onGoing")){
      title.style.backgroundColor = 'yellow'
    }else{
      title.style.backgroundColor = 'red'
    }
  })
// list ofchallenge
 
