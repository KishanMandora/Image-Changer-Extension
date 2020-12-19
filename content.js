console.log("Extension is working !!");

chrome.runtime.onMessage.addListener(changeImg);

function changeImg(msg) {
  // console.log("work is on");
  if (msg.txt === "hello") {
    let getImg = document.getElementsByTagName("img");

    for (i of getImg) {
      // console.log("is it");
      i.src =
        "https://images.unsplash.com/photo-1575239005176-a1e644188f51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
    }
  }
}
