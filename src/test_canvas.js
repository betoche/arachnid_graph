function introducedText(textVal) {
    getInfoText().innerHTML = textVal;
    drawCanvas();
}
function introducedX(xVal) {
    getInfoX().innerHTML = xVal;
    drawCanvas();
}
function introducedY(yVal) {
    getInfoY().innerHTML = yVal;
    drawCanvas();
}
function introducedRadians(radianVal) {
    let degrees = 0;
    degrees = radianVal*(180/Math.PI);
    
    getInfoRadian().innerHTML = radianVal;
    getInfoAngle().innerHTML = degrees.toFixed(2);
    getAngle().value = degrees.toFixed(2);
    drawCanvas();
}
function introducedAngle(angleVal) {
    let radians = 0;
    radians = angleVal * (Math.PI/180);

    getInfoAngle().innerHTML = angleVal;
    getInfoRadian().innerHTML = radians.toFixed(2);
    getRadian().value = radians.toFixed(2);
    drawCanvas();
}
function introducedRadius(radius) {
    console.log( "radius: " + radius );
    getContextWorking().save();
    drawCenteredXYAxis(getContextWorking());

    getContextWorking().restore();
}
function drawCenteredXYAxis( context ){
    context.beginPath();
    context.lineWidth = "0.1"
    context.moveTo(150, 0);
    context.lineTo(150, 300);
    context.moveTo(0, 150);
    context.lineTo(300, 150);
    context.stroke();
}

function drawCanvas() {
    drawText();
    drawRotated();
    drawTranslated();
    drawMixed();
}
function drawText() {
    let text = getText().value;
    let x = 0;
    let y = 0;
    let metrics = null;

    getContextText().clearRect( 0, 0, 300, 300);

    getContextText().font = "30px Arial";
    metrics = getContextText().measureText(text);
    y = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    getContextText().lineWidth = "0.1";
    getContextText().fillText(text, x, y);
}
function drawRotated() {
    let text = getText().value;
    let radians = getRadian().value;
    let x = 0;
    let y = 150;
    let metrics = null;
    
    getContextRotated().clearRect( 0, 0, 300, 300);
    getContextRotated().font = "30px Arial";
    metrics = getContextRotated().measureText(text);
    y = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    getContextRotated().save();
    getContextRotated().rotate( radians );
    getContextRotated().fillText(text, x, y);
    getContextRotated().fillText(text.split("").reverse().join(""), x, 300);
    getContextRotated().lineWidth = "0.1";
    getContextRotated().strokeRect(0, 0, 300, 300);
    getContextRotated().restore();
}
function drawTranslated() {
    let text = getText().value;
    let x = 0;
    let y = 0;

    x = getX().value;
    y = getY().value;

    getContextTranslated().clearRect(0, 0, 300, 300);
    getContextTranslated().font = "30px Arial";

    getContextTranslated().save();
    getContextTranslated().translate( x, y );
    getContextTranslated().fillText( text, 0, 0 )
    getContextTranslated().lineWidth = "0.1";
    getContextTranslated().strokeRect(0, 0, 300, 300);
    getContextTranslated().restore();
}
function drawMixed() {
    let text = getText().value;
    let x = getX().value;
    let y = getY().value;
    let radians = getRadian().value;

    getContextMixed().clearRect(0, 0, 300, 300);
    getContextMixed().font = "30px Arial";
   
    let metrics = getContextRotated().measureText(text);
    let height = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    let width = metrics.width;

    getContextMixed().save();
    drawCenteredXYAxis(getContextMixed());

    getContextMixed().font = "10px Arial";
    getContextMixed().fillText("width : " + width, 20, 285);
    getContextMixed().fillText("height: " + height, 20, 295);
    getContextMixed().restore();

    getContextMixed().save();
    getContextMixed().lineWidth = "0.1";
    getContextMixed().textAlign="center";
    getContextMixed().textBaseline="middle";
    getContextMixed().translate( x, y );
    getContextMixed().fillText( text, 0, 0 )
    getContextMixed().strokeRect(0, 0, 300, 300);
    getContextMixed().rotate( radians );
    getContextMixed().fillText(text, 0, 0);
    getContextMixed().strokeRect(0, 0, 300, 300);
    getContextMixed().restore();

    
}
function saveMixedCanvas() {
    let div = document.createElement("div");
    let dataUrl = getCanvasMixed().toDataURL("png");
    let screen = document.createElement("a");
    let br = document.createElement("br");
    screen.setAttribute("href", dataUrl);
    screen.setAttribute("download", true);
    screen.innerHTML = "Screenshot 1";

    let image = document.createElement("img");
    image.setAttribute("src", dataUrl);

    div.style.float="left";
    div.style.paddingLeft="5px";
    
    div.append(image);
    div.append(br);
    div.append(screen);
    getScreenshots().append(div);
}