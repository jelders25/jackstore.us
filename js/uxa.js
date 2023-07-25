
(function () {
  window._uxa = window._uxa || [];
  if (typeof CS_CONF === 'undefined') {
    window._uxa.push(['setPath', window.location.pathname + window.location.hash.replace('#', '?__')]);
    var mt = document.createElement('script'); mt.type = 'text/javascript'; mt.async = true;
    mt.src = '//t.contentsquare.net/uxa/6ab1c73169b63.js';
    document.getElementsByTagName('head')[0].appendChild(mt);
  }
  else {
    window._uxa.push(['trackPageview', window.location.pathname + window.location.hash.replace('#', '?__')]);
  }
  window._uxa.push([
    "trackError",
    "I don't do custom cuts! Who do you think I am?",
    {
      "type": "textInfo",
      "severity": "minor",
      "lang": "english"
    }
  ])
})();

