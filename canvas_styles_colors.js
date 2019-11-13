var ctx8;
var offset;

function draw() {
    console.log('draw started');
    var ctx = document.getElementById('canvas').getContext('2d');
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ',' +
            Math.floor(255 - 42.5 * j) + ')';
            ctx.beginPath();
            ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
            ctx.stroke();
        }
    }

    var ctx2 = document.getElementById('canvas-transparent').getContext('2d');
    ctx2.fillStyle = '#FD0';
    ctx2.fillRect(0, 0, 75, 75);
    ctx2.fillStyle = '#6C0';
    ctx2.fillRect(75, 0, 75, 75);
    ctx2.fillStyle = '#09F';
    ctx2.fillRect(0, 75, 75, 75);
    ctx2.fillStyle = '#F30';
    ctx2.fillRect(75, 75, 75, 75);
    ctx2.fillStyle = '#FFF';

    // set transparency value
    ctx2.globalAlpha = 0.2;

    // Draw semi transparent circles
    for (var i = 0; i < 7; i++) {
        ctx2.beginPath();
        ctx2.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
        ctx2.fill();
    }

    var ctx3 = document.getElementById('canvas-opacity').getContext('2d');

    // Draw background
    ctx3.fillStyle = 'rgb(255, 221, 0)';
    ctx3.fillRect(0, 0, 150, 37.5);
    ctx3.fillStyle = 'rgb(102, 204, 0)';
    ctx3.fillRect(0, 37.5, 150, 37.5);
    ctx3.fillStyle = 'rgb(0, 153, 225)';
    ctx3.fillRect(0, 75, 150, 37.5);
    ctx3.fillStyle = 'rgb(225, 51, 0)';
    ctx3.fillRect(0, 112.5, 150, 37.5);

    // Draw semi transparent rectangles
    for (var i = 0; i < 10; i++) {
        ctx3.fillStyle = 'rgba(255, 255, 255, ' + (i + 1) / 10 + ')';
        for (var j = 0; j < 4; j++) {
            ctx3.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
        }
    }
    
    var ctx4 = document.getElementById('canvas-line-width').getContext('2d');

    for (var i = 0; i < 10; i++) {
        ctx4.lineWidth = 1 + i;
        ctx4.beginPath();
        ctx4.moveTo(5 + i * 14, 5);
        ctx4.lineTo(5 + i * 14, 140);
        ctx4.stroke();
    }

    var ctx5 = document.getElementById('canvas-line-linecap').getContext('2d');
    var lineCap = ['butt', 'round', 'square'];

    // Draw guides
    ctx5.strokeStyle = '#09f';
    ctx5.beginPath();
    ctx5.moveTo(10, 10);
    ctx5.lineTo(140, 10);
    ctx5.moveTo(10, 140);
    ctx5.lineTo(140, 140);
    ctx5.stroke();

    // Draw lines
    ctx5.strokeStyle = 'black';
    for (var i = 0; i < lineCap.length; i++) {
        ctx5.lineWidth = 15;
        ctx5.lineCap = lineCap[i];
        ctx5.beginPath();
        console.log('X: ' + (25 + i * 50));
        ctx5.moveTo(25 + i * 50, 10);
        ctx5.lineTo(25 + i * 50, 140);
        ctx5.stroke();
    }

    var ctx6 = document.getElementById('canvas-line-linejoin').getContext('2d');
    var lineJoin = ['round', 'bevel', 'miter'];
    ctx6.lineWidth = 10;
    for (var i = 0; i < lineJoin.length; i++) {
        ctx6.lineJoin = lineJoin[i];
        ctx6.beginPath();
        ctx6.moveTo(-5, 5 + i *40);
        ctx6.lineTo(35, 45 + i * 40);
        ctx6.lineTo(75, 5 + i * 40);
        ctx6.lineTo(115, 45 + i * 40);
        ctx6.lineTo(155, 5 + i * 40); 
        ctx6.stroke();
    }

    ctx8 = document.getElementById('canvas-line-linedashes').getContext('2d');
    offset = 0;
    march();
}

function drawMiterLimit() {
        var ctx7 = document.getElementById('canvas-line-miterlimit').getContext('2d');

    // Clear canvas
    ctx7.clearRect(0, 0, 150, 150);

    // Draw guides
    ctx7.strokeStyle = '#09f';
    ctx7.lineWidth = 2;
    ctx7.strokeRect(-5, 50, 160, 50);

    // Set lines styles
    ctx7.strokesStyle = '#000';
    ctx7.lineWidth = 10;

    // check input
    if (document.getElementById('miterLimit').value.match(/\d+(\.\d+)?/)) {
        ctx7.miterLimit = parseFloat(document.getElementById('miterLimit').value);
    } else {
        alert('Value must be a positive number');
    }

    // Draw lines
    ctx7.beginPath();
    ctx7.moveTo(0, 100);
    for (i = 0; i < 24 ; i++) {
        var dy = i % 2 == 0 ? 25 : -25;
        ctx7.lineTo(Math.pow(i, 1.5) * 2, 75 +dy);
    }
    ctx7.stroke();
    return false;
}

function drawLineDashes() {
    ctx8.clearRect(0, 0, canvas.width, canvas.height);
    ctx8.setLineDash([4, 2]);
    ctx8.lineDashOffset = -offset;
    ctx8.strokeRect(10, 10, 100, 100);
}

function march() {
    offset++;
    if (offset > 16) {
        offset = 0;
    }
    drawLineDashes();
    setTimeout(march, 2000);
}