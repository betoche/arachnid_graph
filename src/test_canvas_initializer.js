let canvasText = null;
let canvasTranslated = null;
let canvasRotated = null;
let canvasMixed = null;
let canvasWorking = null;

let contextText = null;
let contextTranslated = null;
let contextRotated = null;
let contextMixed = null;
let contextWorking = null;

let text = null;
let radian = null;
let angle = null;
let x = null;
let y = null;
let radius = null;

let infoText = null;
let infoX = null;
let infoY = null;
let infoRadian = null;
let infoAngle = null;

let screenshots = null;

function initialize() {
    getRadian().setAttribute("max", (Math.PI*2).toFixed(2));
    getRadian().setAttribute("min", -(Math.PI*2).toFixed(2));
    getRadian().value = 10*(Math.PI/180).toFixed(2);
    getAngle().value = 10;
    getX().value=10;
    getY().value=20;
    getRadius().value=100;
}

function getCanvasText() {
    if ( canvasText == null ) {
        canvasText = document.getElementById("canvas-text");
    }
    return canvasText;
}
function getCanvasTranslated() {
    if ( canvasTranslated == null ) {
        canvasTranslated = document.getElementById( "canvas-translated" );
    }
    return canvasTranslated;
}
function getCanvasRotated() {
    if ( canvasRotated == null ) {
        canvasRotated = document.getElementById("canvas-rotated");
    }
    return canvasRotated;
}
function getCanvasMixed() {
    if ( canvasMixed == null ) {
        canvasMixed = document.getElementById("canvas-mixed");
    }
    return canvasMixed;
}
function getCanvasWorking() {
    if ( canvasWorking == null ) {
        canvasWorking = document.getElementById("canvas-working");
    }
    return canvasWorking;
}

function getContextText() {
    if ( contextText == null ) {
        contextText = getCanvasText().getContext("2d");
    }
    return contextText;
}
function getContextTranslated() {
    if ( contextTranslated == null ) {
        contextTranslated = getCanvasTranslated().getContext("2d");
    }
    return contextTranslated;
}
function getContextRotated() {
    if ( contextRotated == null ) {
        contextRotated = getCanvasRotated().getContext("2d");
    }
    return contextRotated;
}
function getContextMixed() {
    if ( contextMixed == null ) {
        contextMixed = getCanvasMixed().getContext("2d");
    }
    return contextMixed;
}
function getContextWorking() {
    if( contextWorking == null ) {
        contextWorking = getCanvasWorking().getContext("2d");
    }
    return contextWorking;
}

function getInfoText() {
    if ( infoText == null ) {
        infoText = document.getElementById("info-text");
    }
    return infoText;
}
function getInfoX() {
    if ( infoX == null ) {
        infoX = document.getElementById( "info-x" );
    }
    return infoX;
}
function getInfoY() {
    if ( infoY == null ) {
        infoY = document.getElementById( "info-y" );
    }
    return infoY;
}
function getInfoRadian() {
    if ( infoRadian == null ) {
        infoRadian = document.getElementById( "info-rad" );
    }
    return infoRadian;
}
function getInfoAngle() {
    if ( infoAngle == null ) {
        infoAngle = document.getElementById( "info-angle" );
    }
    return infoAngle;
}
function getText() {
    if ( text == null ) {
        text = document.getElementById( "text" );
    }
    return text;
}
function getRadian() {
    if ( radian == null ) {
        radian = document.getElementById( "radian" );
    }
    return radian;
}
function getAngle() {
    if ( angle == null ) {
        angle = document.getElementById( "angle" );
    }
    return angle;
}
function getX() {
    if ( x == null ) {
        x = document.getElementById( "x" );
    }
    return x;
}
function getY() {
    if ( y == null ) {
        y = document.getElementById( "y" );
    }
    return y;
}
function getRadius() {
    if ( radius == null ) {
        radius = document.getElementById("radius");
    }
    return radius;
}
function getScreenshots() {
    if ( screenshots == null ) {
        screenshots = document.getElementById( "screenshots" );
    }
    return screenshots;
}
