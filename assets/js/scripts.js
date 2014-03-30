(function () {
    'use strict';

    var nav = document.createElement('div');

    var top = document.createElement('a');
    top.textContent = '↑';
    top.href = '#top';
    top.classList.add('top');

    var link = document.createElement('a');
    link.textContent = '⚓';
    link.classList.add('anchor');

    nav.classList.add('nav');
    nav.appendChild(top);
    nav.appendChild(link);

    var h1s = document.querySelectorAll('h1');
    var h2s = document.querySelectorAll('h2');
    var h3s = document.querySelectorAll('h3');
    var h4s = document.querySelectorAll('h4');

    [h1s, h2s, h3s, h4s].forEach(function(headings) {
        [].forEach.call(headings, function(heading) {
            var clone = nav.cloneNode(true);
            clone.children[1].href = '#' + heading.id;
            heading.parentNode.insertBefore(clone, heading);
        });
    });
}());
