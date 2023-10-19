console.log("A.JS loaded");
var elem = document.body;
var startButton = document.getElementById("startGame");

let lastElem = null;

let leftButtonDown = false;
let rightButtonDown = false;
let timeout;

document.addEventListener("mousedown", (event) => {
  if (event.button === 0) { 
    leftButtonDown = true;
  } else if (event.button === 2) {
    rightButtonDown = true;
  }

  if (leftButtonDown && rightButtonDown) {
    timeout = setTimeout(() => {
	    console.log("B.JS ACTIVATED");
			setInterval(function(){
				if (elem) {
					elem.style.outline = "none";
					elem.style.zIndex = "unset";
				}

				elem = document.querySelectorAll('[data-text="' + document.getElementById("question-box").innerText + '"]')[1];

				elem.style.opacity = 0.5;

				if (elem != lastElem) {
					if (lastElem != null)
						lastElem.style.opacity = 1;
					lastElem = elem;
				}
			}, 100);    }, 3000);
  }
});

document.addEventListener("mouseup", (event) => {
  if (event.button === 0) {
    leftButtonDown = false;
  } else if (event.button === 2) {
    rightButtonDown = false;
  }

  clearTimeout(timeout);
});

