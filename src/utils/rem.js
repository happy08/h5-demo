//import utils from './index.js'
(function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  //防抖
  //let recalc = utils.debounce(function(item) {
  function recalc() {
    var designWidth = 750
    var clientWidth = docEl.clientWidth
    if (!clientWidth || clientWidth > designWidth || clientWidth < 320) {
      docEl.style.fontSize = (designWidth / 20) + 'px'
    }else{
      docEl.style.fontSize = (75 * clientWidth / designWidth) + 'px'
    }
  }
  //}, 50);

  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
