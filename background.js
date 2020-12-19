console.log("back on");

function clicking(tab) {
  const msg = {
    txt: "hello",
  };
  chrome.tabs.sendMessage(tab.id, msg);
  console.log(tab.id);
}

chrome.browserAction.onClicked.addListener(clicking);
