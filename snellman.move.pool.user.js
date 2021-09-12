// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://terra.snellman.net/faction/bunderscoretest/*
// @icon         https://www.google.com/s2/favicons?domain=snellman.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var checkExist = setInterval(function() {
   if (document.getElementById('root')) {
       var container = document.getElementById ("root");
       var factions = document.getElementById ("factions");
       var pool = factions.querySelector(".pool");
       var gameBoard = document.getElementById ("main-data");

       console.log("Pool = " + pool);
       //-- Move the pool to be right after the game board.
       gameBoard.parentNode.insertBefore (pool, gameBoard.nextSibling);
       clearInterval(checkExist);
   }
    }, 100); // check every 100ms

})();