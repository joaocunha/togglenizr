Togglenizr
=================

Togglenizr is a bookmarklet to ease debugging for Modernizr. No need to manually add/remove those feature classes anymore - just toggle them away!

Copy & paste the code below or just create a bookmarklet for easy access.

    (function(e,b){var g=function(){var a=b.createElement("div");a.innerHTML='<h1 style="text-align: center;font-size:20px;line-height:24px;margin:5px">Togglenizr</h1><h2 style="font-size:12px;line-height:16px;background:#222;margin:0;text-align:center;">by <a style="color:#b80007;" href="http://twitter.com/joaocunha">@joaocunha</a></h2>';a.id="mt-wrapper";a.style.cssText="font-family: arial;font-size: 14px;line-height: 20px;background: #333;color: white;width: 250px;height: 400px;position: fixed;top: 20px;right: 20px;overflow: scroll;opacity: 0.8;z-index:9999;";b.getElementsByTagName("body")[0].appendChild(a);a=b.createElement("input");a.type="text";a.id="mt-prefix";a.placeholder="Prefix (optional)";a.style.cssText="margin: 15px auto;display: block;color: black;";b.getElementById("mt-wrapper").appendChild(a)},k=function(a,h){var c=b.createElement("input"),d=b.createElement("label");c.type="checkbox";c.id=a;c.style.cssText="margin-right:8px;vertical-align:middle;";!0===h&&c.setAttribute("checked",!0);d.appendChild(c);d.innerHTML+=a;d.style.cssText="display: block;margin: 5px;padding: 5px;border: 1px solid #555;background: #444;";b.getElementById("mt-wrapper").appendChild(d);b.getElementById(a).addEventListener("change",function(){var c=b.getElementById("mt-prefix").value;this.checked?(b.documentElement.classList.add(c+a),e[a]=!0):(b.documentElement.classList.remove(c+a),e[a]=!1)},!1)},f=function(a){for(var b in a){var c=a[b];"[object Boolean]"===Object.prototype.toString.call(c)?k(b,!!c):"[object Object]"===Object.prototype.toString.call(c)&&f(c)}};e?(g(),f(e)):alert("Can I haz Modernizr?")})(window.Modernizr,document);

![Togglenizr](http://i.gyazo.com/5c09067443f42a655fe5047b6bb5fa3e.gif "Togglenizr")

*Najam, Najam.*
