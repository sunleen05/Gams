/**
 * Console Debug Tool Loader for Gams Dashboard.
 * Loads eruda from CDN if not present. Only enables in development mode
 * or if "?debug" is present in the URL.
 * Eruda: https://github.com/liriliri/eruda
 */

(function () {
  // Enable eruda only if not already present and URL contains "?debug" or localStorage flag is set
  var enabled =
    location.search.indexOf('debug') !== -1 ||
    localStorage.getItem('enableEruda') === 'true';

  if (enabled) {
    // If eruda is not loaded, load from CDN
    if (!window.eruda) {
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/eruda@3.0.0/eruda.min.js';
      script.onload = function () {
        eruda.init();
      };
      document.body.appendChild(script);
    } else {
      // Already present, just init
      eruda.init();
    }
  }

  // Optional: Add keyboard shortcut (Ctrl+~) to toggle eruda
  window.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === '`') {
      if (!window.eruda) {
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/eruda@3.0.0/eruda.min.js';
        script.onload = function () {
          eruda.init();
          localStorage.setItem('enableEruda', 'true');
        };
        document.body.appendChild(script);
      } else {
        var container = document.querySelector('.eruda-container');
        if (container) {
          container.style.display =
            container.style.display === 'none' ? '' : 'none';
        }
      }
    }
  });
})();
