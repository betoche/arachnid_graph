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

    var ctx9 = document.getElementById('canvas-lineargradients').getContext('2d');
    
    // Create gradients
    var lingrad = ctx9.createLinearGradient(0, 0, 0, 150);
    lingrad.addColorStop(0, '#00ABEB');
    lingrad.addColorStop(0.5, '#fff');
    lingrad.addColorStop(0.5, '#26C000');
    lingrad.addColorStop(1, '#fff');

    var lingrad2 = ctx9.createLinearGradient(0, 50, 0, 95);
    lingrad2.addColorStop(0.5, '#000');
    lingrad2.addColorStop(1, 'rgba(0, 0, 0, 0)');

    // assign gradients to fill and stroke styles
    ctx9.fillStyle = lingrad;
    ctx9.strokeStyle = lingrad2;

    // draw shapes
    ctx9.fillRect(10, 10, 130, 130);
    ctx9.strokeRect(50, 50, 50, 50);

    var ctx10 = document.getElementById('canvas-radialgradient').getContext('2d');

    // Create gradients
    var radgrad = ctx10.createRadialGradient(45, 45, 10, 52, 50, 30);
    radgrad.addColorStop(0, '#A7D30C');
    radgrad.addColorStop(0.9, '#019F62');
    radgrad.addColorStop(1, 'rgba(1, 159, 98, 0)');

    var radgrad2 = ctx10.createRadialGradient(105, 105, 20, 112, 120, 50);
    radgrad2.addColorStop(0, '#FF5F98');
    radgrad2.addColorStop(0.75, '#FF0188');
    radgrad2.addColorStop(1, 'rgba(255, 1, 136, 0)');

    var radgrad3 = ctx10.createRadialGradient(95, 15, 15, 102, 20, 40);
    radgrad3.addColorStop(0, '#00C9FF');
    radgrad3.addColorStop(0.8, '#00B5E2');
    radgrad3.addColorStop(1, 'rgba(0, 201, 255, 0)');

    var radgrad4 = ctx10.createRadialGradient(0, 150, 50, 0, 140, 90);
    radgrad4.addColorStop(0, '#F4F201');
    radgrad4.addColorStop(0, '#E4C700');
    radgrad4.addColorStop(1, 'rgba(228, 199, 0, 0)');

    // draw shapes
    ctx10.fillStyle = radgrad4;
    ctx10.fillRect(0, 0, 150, 150);
    ctx10.fillStyle = radgrad3;
    ctx10.fillRect(0, 0, 150, 150);
    ctx10.fillStyle = radgrad2;
    ctx10.fillRect(0, 0, 150, 150);
    ctx10.fillStyle = radgrad;
    ctx10.fillRect(0, 0, 150, 150);

    var ctx11 = document.getElementById('canvas-pattern').getContext('2d');
    
    // create new image object to use as pattern
    var img = new Image();
    img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
    img.onload = function() {
        // create pattern
        var ptrn = ctx11.createPattern(img, 'repeat');
        ctx11.fillStyle = ptrn;
        ctx11.fillRect(0, 0, 150, 150);
    }

    var ctx12 = document.getElementById('canvas-shadowedtext').getContext('2d');

    ctx12.shadowOffsetX = 2;
    ctx12.shadowOffsetY = 2;
    ctx12.shadowBlur = 2;
    ctx12.shadowColor = 'rgba(0, 0, 0, 0.5)';

    ctx12.font = '20px Times New Roman';
    ctx12.fillStyle = 'Black';
    ctx12.fillText('Sample String', 5, 50);

    var ctx13 = document.getElementById('canvas-fillrules').getContext('2d');
    ctx13.beginPath();
    ctx13.arc(50, 50, 30, 0, Math.PI * 2, true);
    ctx13.arc(50, 50, 15, 0, Math.PI * 2, true);
    ctx13.fill('evenodd');
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
    setTimeout(march, 200);
}