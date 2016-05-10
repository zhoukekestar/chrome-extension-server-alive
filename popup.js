var autoRun = function() {

  window.switchToLocal = function() {
    console.log('local')
    location.href = location.href
								    	.replace('https', 'http')
								    	.replace('dev-m.toomao.com', 'local.toomao.com:3002')
								    	.replace('dev-www.toomao.com', 'local.toomao.com:3003')
								    	.replace('dev-admin.toomao.com', 'local.toomao.com:3001')
								    	.replace('dev-activity.toomao.com', 'local.toomao.com:3004');
  }

  window.switchToDev = function() {
    console.log('dev')
    location.href = location.href
								    	.replace('http', 'https')
								    	.replace('local.toomao.com:3002', 'dev-m.toomao.com')
								    	.replace('local.toomao.com:3003', 'dev-www.toomao.com')
								    	.replace('local.toomao.com:3001', 'dev-admin.toomao.com')
								    	.replace('local.toomao.com:3004', 'dev-activity.toomao.com')
  }

}

function buttonClick() {

  if (this.dataset.inject) {

    var code = '!(' + autoRun.toString() + ')();' + (this.dataset.inject || "");
    chrome.tabs.executeScript(null, {code: code});

  } else if (this.dataset.openTab) {

    chrome.tabs.create({url: this.dataset.openTab, selected: true})

  } else {

  }
}

document.body.addEventListener('click', function(e) {
  if (e.target.nodeName === 'BUTTON') {
    buttonClick.call(e.target);
  }
})
