var trainLeftPos = 4000;
var trainOrientation = "right";
var speed = 16;
var trainTimer = 300;

function update(progress) {
    var windowWidth = window.innerWidth*8;

    let trainWidth = document.getElementById("train").offsetWidth;

    // orientation
    if (trainLeftPos > windowWidth+trainWidth*1.1) {
        document.getElementById("train").style.transform = "scaleX(-1)";
        trainOrientation = "left";
    }

    if (trainLeftPos <= -trainWidth*1.5) {
        document.getElementById("train").style.transform = "scaleX(1)";
        trainOrientation = "right";
    }

    // speed
    if (trainTimer > 0) {
        if (trainLeftPos > windowWidth/4 && trainLeftPos < (windowWidth/4)*3 && speed > 0) {
            speed = speed-0.1;
            trainTimer = trainTimer-1;
        }
        else {
            speed = 16;
        }
    }

    if (trainTimer == 0 && speed < 16) {
        speed = speed+0.1;
    }

    else {
        trainTimer = 30;
    }

    // final move
    if (trainOrientation == "left") {
        trainLeftPos = (trainLeftPos-speed);
    }

    if (trainOrientation == "right") {
        trainLeftPos = (trainLeftPos+speed);
    }

    document.getElementById("train").style.left = trainLeftPos+"px";
  }
  
  function draw() {
  }
  
  function loop(timestamp) {
    var progress = timestamp - lastRender
  
    update(progress)
    draw()
  
    lastRender = timestamp
    window.requestAnimationFrame(loop)
  }

  var lastRender = 0
  window.requestAnimationFrame(loop)