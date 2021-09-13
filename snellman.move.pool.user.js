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
            var factions = document.getElementById ("factions");
            const config = { childList: true };

            var callback = function(mutations, observer) {
                for(const mutation of mutations) {
                    if (mutation.type === 'childList') {
                        var pool = mutation.target.querySelector(".pool");
                        if (pool != null) {
                            var gameBoard = document.getElementById ("main-data");
                            var firstRow = gameBoard.rows[0];
                            if (firstRow.cells.length > 2) {
                                firstRow.deleteCell(-1);
                            }
                            var newCell = firstRow.insertCell(-1);
                            newCell.rowSpan = 3;
                            newCell.style.verticalAlign = "top";
                            newCell.appendChild(pool);
                            pool.style.width = "410px";
                        }
                    }
                }
            }

            var observer = new MutationObserver(callback);
            observer.observe(factions, config);

            clearInterval(checkExist);
        }
    }, 100); // check every 100ms

})();