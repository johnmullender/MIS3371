/*
    Program Name: index.html
    Author: John Mullender
    Date created: February 22, 2026
    Date modified: February 26, 2026
    Version: 1.0
    Purpose: Homework1 JavaScript Form
*/

// dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementByID("today").innerHTML = text;

// range slide js code
let slider = document.getElementById("prange")
    let output = document.getElementById("range-slider")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML - this.value;};

