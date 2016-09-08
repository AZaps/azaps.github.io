// Get the current height and width of the picture to match the corresponding overlay boxes.
var picture = document.getElementById("graphingApplicationScreenshot");
var pictureHeight = picture.height;
var pictureWidth = picture.width;

// Get picture offset location
var bounds = picture.getBoundingClientRect();

function setBoxOverlay(boxID, heightPercent, widthPercent, topOffset, leftOffset) {
    boxID.style.height = pictureHeight * heightPercent + "px";
    boxID.style.width = pictureWidth * widthPercent + "px";
    if (boxID === pictureElement1) {
        boxID.style.top = bounds.top * topOffset + "px";
        boxID.style.left = bounds.left * leftOffset + "px";
        boxID.style.position = "absolute";
    } else if (boxID === rowPicHolder) {
        boxID.style.bottom = bounds.bottom * topOffset + "px";
        boxID.style.left = bounds.left * leftOffset + "px";
        boxID.style.position = "absolute";
    } else {
        boxID.style.float = "left";
    }
    
    return boxID;
}

function displayElement(element) {
    var ele = element.getBoundingClientRect();
    console.log("Top = " + ele.top);
    console.log("Left = " + ele.left);
    console.log("Height x width = " + ele.height + " x " + ele.width);
}

var pictureElement1 = document.getElementById("pictureBox1");
pictureElement1 = setBoxOverlay(pictureElement1, 0.73, 1, 0, 1);

var rowPicHolder = document.getElementById("bottomPicHolder");
rowPicHolder = setBoxOverlay(rowPicHolder, 0.26, 1, 0, 1);

var pictureElement2 = document.getElementById("pictureBox2");
pictureElement2 = setBoxOverlay(pictureElement2, 0.26, 0.36, 1, 1);

var pictureElement3 = document.getElementById("pictureBox3");
pictureElement3 = setBoxOverlay(pictureElement3, 0.26, 0.15, 0, 0);

var pictureElement4 = document.getElementById("pictureBox4");
pictureElement4 = setBoxOverlay(pictureElement4, 0.26, 0.29, 0, 0);

var pictureElement5 = document.getElementById("pictureBox5");
pictureElement5 = setBoxOverlay(pictureElement5, 0.26, 0.2, 0, 0);