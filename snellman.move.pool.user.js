// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://terra.snellman.net/faction/*
// @icon         https://www.google.com/s2/favicons?domain=snellman.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var checkExist = setInterval(function() {
   if (document.getElementById('root')) {
       var gameBoard = document.getElementById ("main-data");
       var factions = document.getElementById ("factions");
       var pool = factions.querySelector(".pool");
       if (pool != null) {
           var firstRow = gameBoard.rows[0];
           var newCell = firstRow.insertCell(-1);
           newCell.rowSpan = 3;
           newCell.appendChild(pool);
           pool.style.width = "410px";
           clearInterval(checkExist);
       }
   }
    }, 100); // check every 100ms

})();