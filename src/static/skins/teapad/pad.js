'use strict';

window.customStart = () => {
  $('#pad_title').show();
  $('.buttonicon').on('mousedown', function () { $(this).parent().addClass('pressed'); });
  $('.buttonicon').on('mouseup', function () { $(this).parent().removeClass('pressed'); });

  getLocalForge();
};




function getLocalForge() {
  const script = document.createElement("script");
  script.src = "https://cdn.rawgit.com/mozilla/localForage/master/dist/localforage.js";
  document.head.appendChild(script);
};
