/**
 * Togglenizr
 * Built in 3 hours of hacking by João Cunha
 *
 * Togglenizr is a bookmarklet to toggle (duh) classes on the HTML
 * and help when implementing fallbacks with Modernizr.
 *
 * I apologize beforehand for the "works in my machine" code standards.
 *
 * http://github.com/joaocunha/togglenizr
 * http://twitter.com/joaocunha
 */

javascript:(function(mod, doc) {
    'use strict';

    var init = function() {
        if (mod) {
            createWrapper();
            scanFeatures(mod);
            appendCloseButton();
            addEvents();
        } else {
            alert('Can I haz Modernizr?');
            return;
        }
    };

    var createWrapper = function() {
        var wrapper = doc.createElement('div');
        // OMG I LOVE INLINE STYLEZZZ!!!!!!!!!
        wrapper.innerHTML = '<h1 style="text-align: center;font-size:20px;line-height:24px;margin:5px"><a href="http://github.com/joaocunha/togglenizr" style="color: white">Togglenizr</a></h1>';
        wrapper.id = 'mt-wrapper';
        wrapper.style.cssText = 'font-family: arial;font-size: 14px;line-height: 20px;background: #333;color: white;width: 250px;height: 400px;position: fixed;top: 20px;right: 20px;overflow: scroll;opacity: 0.8;z-index:9999;';
        doc.getElementsByTagName('body')[0].appendChild(wrapper);

        var prefixInput = doc.createElement('input')
        prefixInput.type = 'text';
        prefixInput.id = 'mt-prefix';
        prefixInput.placeholder = 'Prefix (optional)';
        prefixInput.style.cssText = 'margin: 15px auto;display: block;color: black;';
        doc.getElementById('mt-wrapper').appendChild(prefixInput);
    };

    var appendCloseButton = function () {
        var wrapper = doc.getElementById('mt-wrapper'),
            closeButton = doc.createElement('button');
        closeButton.id = 'mt-close-button';
        closeButton.textContent = '❱';
        closeButton.style.cssText = 'position: absolute; top: 0; left: 0; border: 0; background: #333; color: #fff; padding: 5px; height: 30px;';

        wrapper.appendChild(closeButton);
    };

    var addEvents = function () {
        var wrapper = doc.getElementById('mt-wrapper'),
            closeButton = doc.getElementById('mt-close-button');

        closeButton.addEventListener('click', function (e) {
            if(wrapper.style.height === '30px'){
               wrapper.style.cssText += 'height: 400px; overflow: scroll;';
                closeButton.textContent = '❱';
            } 
            else if (wrapper.style.height === '400px'){
               wrapper.style.cssText += 'height: 30px; overflow: hidden;';
                closeButton.textContent = '❰';

            }
        });
    };

    var createToggler = function(feature, state) {
        var toggle = doc.createElement('input'),
            label  = doc.createElement('label');

        toggle.type = 'checkbox';
        toggle.id = feature;
        toggle.style.cssText = 'margin-right:8px;vertical-align:middle;';
        (state === true) && toggle.setAttribute('checked', true);

        label.appendChild(toggle);
        label.innerHTML += feature;
        label.style.cssText = 'display: block;margin: 5px;padding: 5px;border: 1px solid #555;background: #444;'

        doc.getElementById('mt-wrapper').appendChild(label);

        doc.getElementById(feature).addEventListener('change', function() {
            var prefix = doc.getElementById('mt-prefix').value;

            // Toggles the class in the HTML and JS
            if (this.checked) {
                doc.documentElement.classList.add(prefix + feature);
                mod[feature] = true;
            } else {
                doc.documentElement.classList.remove(prefix + feature);
                mod[feature] = false;
            }
        }, false);
    };

    var scanFeatures = function(list) {
        for (var val in list) {
            var key = list[val];

            // Creates a toggler for each and every boolean feature
            if (Object.prototype.toString.call(key) === '[object Boolean]') {
                // We cast because features like "video" are
                // sort "empty booleans"
                createToggler(val, !!(key));
            } else if (Object.prototype.toString.call(key) === '[object Object]') {
                // If it's an object, it holds a group of boolean features,
                // so we call it recursively ('input' holds date, search, tel, etc)
                scanFeatures(key);
            }
        }
    };

    init();

})(window.Modernizr, document);

// Najam, Najam.
