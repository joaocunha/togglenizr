;(function(mod) {
    'use strict';

    var init = function() {
        if (mod) scanFeatures(mod);
    };

    var createTogglers = function(feature, state) {
        var toggle = document.createElement('input'),
            label  = document.createElement('label');

        toggle.type = 'checkbox';
        toggle.id = feature;
        (state === true) && toggle.setAttribute('checked', true);

        label.appendChild(toggle);
        label.innerHTML += feature;

        document.getElementsByTagName('body')[0].appendChild(label);

        document.getElementById(feature).addEventListener('change', function() {

            // TODO: add prefix support
            // Toggles the class in the HTML
            document.documentElement.classList.toggle(feature);

            // Toggles the JS property
            mod[feature] = !mod[feature];
        }, false);
    };

    var scanFeatures = function(list) {
        for (var val in list) {
            var key = list[val];

            // Creates a toggler for each and every boolean feature
            if (Object.prototype.toString.call(key) === '[object Boolean]') {
                // We cast because features like "video" are
                // sort "empty booleans"
                createTogglers(val, !!(key));
            } else if (Object.prototype.toString.call(key) === '[object Object]') {
                // If it's an object, it holds a group of boolean features,
                // so we call it recursively ('input' holds date, search, tel, etc)
                scanFeatures(key);
            }
        }
    };

    init();

})(window.Modernizr);
