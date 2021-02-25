function setCookie(c_name, value, exdays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = c_name + "=" + c_value;
}
function getCookie(c_name) {
  var i, x, y, ARRcookies = document.cookie.split(";");
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x == c_name) {
      return unescape(y);
    }
  }
}

console.log("script.js getCookie('bonusCount') =>", getCookie('bonusCount'));

setInterval(() => {
  if (document.querySelector('.claimable-bonus__icon')) {
    console.log('Found bonus button and pressed it.');
    document.querySelector('.claimable-bonus__icon').click();
    if (!getCookie('bonusCount')) {
      value = 1
    } else {
      value = (Number(getCookie('bonusCount')) + 1)
    }
    setCookie('bonusCount', value, 99999)
  }
}, 1000 * 0.5)

