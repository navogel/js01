console.log("hello main.js, great jorb");

let name = "NATER";

console.log(name);

//let matches = document.querySelectorAll(".article__header");

//console.log(matches);

//  matches.forEach(function(i) {
//      console.log(i);
//  });

//change title to name

let header = document.querySelector("section.article__header");
console.log(header);
header.textContent = `Welcome to the ${name} blog`;

//select all .article__header elements

let allHeaders = document.querySelectorAll(".article__header");
console.log("all headers", allHeaders);

//change each one to add class "important" using traditional for each

for (let i = 0; i < allHeaders.length; i++) {
	allHeaders[i].classList.add("important");
	console.log(allHeaders[i].className);
}

//using shorthand for each

allHeaders.forEach(function(unit) {
	unit.classList.add("important");
});

//remove .dashed class

let dashed = document.querySelector(".dashed");
dashed.classList.remove("dashed");

//add goldenrod to footer

let footerEl = document.querySelector(".article__footer");
footerEl.classList.add("goldenrod");
