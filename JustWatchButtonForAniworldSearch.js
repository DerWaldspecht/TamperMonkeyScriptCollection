// ==UserScript==
// @name         Aniworld to JustWatch Search
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a button to search on JustWatch from Aniworld
// @author       FeliBeli
// @match        https://aniworld.to/search*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var button = document.createElement("button");
    button.innerHTML = "Search on JustWatch";
    button.style.marginTop = "10px";
    button.style.backgroundColor = "#007BFF";
    button.style.color = "#FFFFFF";
    button.style.border = "none";
    button.style.padding = "10px 20px";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";

    button.addEventListener("click", function() {
        var query = document.getElementById("search").value;
        var justWatchUrl = "https://www.justwatch.com/de/Suche?q=" + encodeURIComponent(query);
        window.open(justWatchUrl, "_blank");
    });

    var searchForm = document.querySelector(".searchForm");
    searchForm.appendChild(button);
})();
