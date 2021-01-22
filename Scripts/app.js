/* Custom JavaScript goes here */
/**
 * Author: Tom Zielinski
 * Date: 01/21/2021
 */

//IIFE - Immediatly invoked function expression

"use strict";

(function () {
    console.log("App started...");

    let paragraphOneText = "Welcome to my ICE site test";

    let paragraphOne = document.getElementById("paragraphOne");

    paragraphOne.textContent = paragraphOneText;
    paragraphOne.className = "fs-5";

    //step 1. document.createElement
    let newParagraph = document.createElement("p");

    //step 2. configutre element
    newParagraph.setAttribute("id", "paragraphTwo");
    newParagraph.textContent = "... and this is Paragraphg two";

    //steo 3 select parent element
    let mainContent = document.getElementsByTagName("main")[0];

    //step 4. insert element
    mainContent.appendChild(newParagraph);
    newParagraph.className = "fs-6";

    let paragraphDiv = document.createElement('div');
    let paragraphThree = `<p id="paragraphThree" class="fs-7">This is paragraph three</p>`;
    paragraphDiv.innerHTML = paragraphThree;

    newParagraph.before(paragraphDiv);

    window.addEventListener("load", Start);
})();