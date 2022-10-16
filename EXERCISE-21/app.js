
// Exercises
// Exercise: Level 1
// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// Get get each of the the paragraph using document.querySelector('#id') and by their id
// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// Loop through the nodeList and get the text content of each paragraph
// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// Set id and class attribute for all the paragraphs using different attribute setting methods
// Exercise: Level 2
// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// Set text content, id and class to each paragraph

// Exercise: Level 3
// DOM: Mini project 1
// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red

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
let dd = "<h4></h4>";
title.style.textDecoration = "underline";
title.insertAdjacentHTML("afterend", dd);
// title

// date
const date = document.querySelector("h4");
date.textContent = new Date().toGMTString();
date.style.backgroundColor = "purple"
date.style.padding = "0.5rem 1rem"
date.style.fontSize = "1rem"
date.style.display = "inline"
// const hexVal = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const col = ["red","yellow","orange","green","purple"]

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
    // condition for changing colors
    if (title.classList.contains("completed")) {
      title.style.backgroundColor = 'green'
    } else if(title.classList.contains("onGoing")){
      title.style.backgroundColor = 'yellow'
    }else{
      title.style.backgroundColor = 'red'
    }
  })
// list ofchallenge
 
