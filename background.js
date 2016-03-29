// Click icon's event
// chrome.browserAction.onClicked.addListener(function() {
// 	chrome.tabs.create({url:"options.html"});
// });

var showMessageing = false;
var noti = null;
var showMessage = function() {

  if (showMessageing) return;
  showMessageing = true;

  noti = new Notification('服务器信息', {icon: "server-alive.png", body: "服务器正在重启...."});
  noti.onclose = function() {
    showMessageing = false;
  }
  noti.onclick = function() {
    noti.close();
  }
}

setInterval(function() {

  var xmlHttp = new XMLHttpRequest();
  var url = 'http://dev-api.toomao.com/1.1/static/version';
  xmlHttp.open("GET", url, true);
  xmlHttp.setRequestHeader('Content-Type', 'application/json');
  xmlHttp.onreadystatechange = function(){
    if (xmlHttp.readyState === 4) {

      if (xmlHttp.status >= 500 && xmlHttp.status < 600) {
        showMessage();
      } else {
        noti && noti.close();
      }
    }
  }
  xmlHttp.send(null);

}, 3000)


