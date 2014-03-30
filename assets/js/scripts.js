(function () {
    'use strict';

    var nav = document.createElement('div');

    var top = document.createElement('a');
    setText(top, '↑');
    top.href = '#top';
    top.className = 'top';

    var link = document.createElement('a');
    setText(link, '⚓');
    link.className = 'anchor';

    nav.className = 'nav';
    nav.appendChild(top);
    nav.appendChild(link);

    var h1s = document.querySelectorAll('h1');
    var h2s = document.querySelectorAll('h2');
    var h3s = document.querySelectorAll('h3');
    var h4s = document.querySelectorAll('h4');
    var h5s = document.querySelectorAll('h5');

    var headings = [h1s, h2s, h3s, h4s, h5s];
    var clone;
    var heading;
    for (var i = 0; i < headings.length; i++) {
        for (var j = 0; j < headings[i].length; j++) {
            heading = headings[i][j];
            clone = nav.cloneNode(true);
            clone.children[1].href = '#' + heading.id;
            heading.parentNode.insertBefore(clone, heading);
        }
    }

    function setText(el, text) {
        el.textContent ? el.textContent = text : el.innerText = text;
    }
}());
