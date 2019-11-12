function draw() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
    }

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);

    var canvas2 = document.getElementById('canvas');
    if (canvas2.getContext) {
        var ctx2 = canvas2.getContext('2d');
    }
    ctx2.fillRect(25, 25, 100, 100);
    ctx2.clearRect(45, 45, 60, 60);
    ctx2.strokeRect(50, 50, 50, 50);

    var canvas3 = document.getElementById('canvas-path');
    if (canvas3.getContext) {
        var ctx3 = canvas3.getContext('2d');

        ctx3.beginPath();
        ctx3.moveTo(75, 50);
        ctx3.lineTo(100, 75);
        ctx3.lineTo(100, 25);
        ctx3.fill();
    }

    var canvas4 = document.getElementById('canvas-move-pen');
    if (canvas4.getContext) {
        var ctx4 = canvas4.getContext('2d');

        ctx4.beginPath();
        ctx4.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        ctx4.moveTo(65, 65);
        ctx4.arc(60, 65, 5, 0, Math.PI*2, true); // Left eye
        ctx4.moveTo(95, 65);
        ctx4.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
        ctx4.moveTo(110, 75);
        ctx4.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
        ctx4.stroke();
    }

    var canvas5 = document.getElementById('canvas-move-triangles');
    if (canvas5.getContext) {
        var ctx5 = canvas5.getContext('2d');

        // Filled triangle
        ctx5.beginPath();
        ctx5.moveTo(25, 25);
        ctx5.lineTo(105, 25);
        ctx5.lineTo(25, 105);
        ctx5.fill();

        // Stroked triangle
        ctx5.beginPath();
        ctx5.moveTo(125, 125);
        ctx5.lineTo(125, 45);
        ctx5.lineTo(45, 125);
        ctx5.closePath();
        ctx5.stroke();
    }

    var canvas6 = document.getElementById('canvas-move-circles');
    if (canvas6.getContext) {
        var ctx6 = canvas6.getContext('2d');

        for ( var i = 0 ; i < 4 ; i++) {
            for ( var j = 0 ; j < 3 ; j++ ) {
                ctx6.beginPath();
                var x = 25 + j * 50; // x coordinate
                var y = 25 + i * 50; // y coordinate
                var radius = 20; // Arc radius
                var startAngle = 0; // End poing on circle
                var endAngle = Math.PI + (Math.PI * j) / 2; // End poing on circle
                var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

                ctx6.arc(x, y, radius, startAngle, endAngle, anticlockwise);

                if ( i > 1 ) {
                    ctx6.fill();
                } else {
                    ctx6.stroke();
                }
            }
        }
    }

    var canvas7 = document.getElementById('canvas-move-quadraticCurveTo');
    if (canvas7.getContext) {
        var ctx7 = canvas7.getContext('2d');

        // Quadratic curves example
        ctx7.beginPath();
        ctx7.moveTo(75, 25);
        ctx7.quadraticCurveTo(25, 25, 25, 62.5);
        ctx7.quadraticCurveTo(25, 100, 50, 100);
        ctx7.quadraticCurveTo(50, 120, 30, 125);
        ctx7.quadraticCurveTo(60, 120, 65, 100);
        ctx7.quadraticCurveTo(125, 100, 125, 62.5);
        ctx7.quadraticCurveTo(125, 25, 75, 25);

        ctx7.stroke();
    }

    var canvas8 = document.getElementById('canvas-move-cubicBezierCurves');
    if (canvas8.getContext) {
        var ctx8 = canvas8.getContext('2d');

        // Cubic curves example
        ctx8.beginPath();
        ctx8.moveTo(75, 40);
        ctx8.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx8.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx8.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx8.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx8.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx8.bezierCurveTo(85, 25, 75, 37, 75, 40);

        ctx8.fill();
    }

    var canvas9 = document.getElementById('canvas-move-combinations');
    if (canvas9.getContext) {
        var ctx9 = canvas9.getContext('2d');

        roundedRect(ctx9, 12, 12, 150, 150, 15);
        roundedRect(ctx9, 19, 19, 150, 150, 9);
        roundedRect(ctx9, 53, 53, 49, 33, 10);
        roundedRect(ctx9, 53, 119, 49, 16, 6);
        roundedRect(ctx9, 135, 53, 49, 33, 10);
        roundedRect(ctx9, 135, 119, 25, 49, 10);

        ctx9.beginPath();
        ctx9.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
        ctx9.lineTo(31, 37);
        ctx9.fill();

        for (var i = 0 ; i < 8; i++) {
            ctx9.fillRect(51 + i * 16, 35, 4, 4);
        }

        for (i = 0 ; i < 6 ; i++) {
            ctx9.fillRect(115, 51 + i * 16, 4, 4);
        }

        for (i = 0; i < 8; i++) {
            ctx9.fillRect(51 + i * 16, 99, 4, 4);
        }

        ctx9.beginPath();
        ctx9.moveTo(83, 116);
        ctx9.lineTo(83, 102);
        ctx9.bezierCurveTo(83, 94, 89, 88, 97, 88);
        ctx9.bezierCurveTo(105, 88, 111, 94, 111, 102);
        ctx9.lineTo(111, 116);
        ctx9.lineTo(106.333, 111.333);
        ctx9.lineTo(101.666, 116);
        ctx9.lineTo(97, 111.333);
        ctx9.lineTo(92.333, 116);
        ctx9.lineTo(87.666, 111.333);
        ctx9.lineTo(83, 116);
        ctx9.fill();

        ctx9.fillStyle = 'white';
        ctx9.beginPath();
        ctx9.moveTo(91, 96);
        ctx9.bezierCurveTo(88, 96, 87, 99, 87, 101);
        ctx9.bezierCurveTo(87, 103, 88, 106, 91, 106);
        ctx9.bezierCurveTo(94, 106, 95, 103, 95, 101);
        ctx9.bezierCurveTo(95, 99, 94, 96, 91, 96);
        ctx9.moveTo(103, 96);
        ctx9.bezierCurveTo(100, 96, 99, 99, 99, 101);
        ctx9.bezierCurveTo(99, 103, 100, 106, 103, 106);
        ctx9.bezierCurveTo(106, 106, 107, 103, 107, 101);
        ctx9.bezierCurveTo(107, 99, 106, 96, 103, 96);
        ctx9.fill();

        ctx9.fillStyle = 'black';
        ctx9.beginPath();
        ctx9.arc(101, 102, 2, 0, Math.PI * 2, true);
        ctx9.fill();

        ctx9.beginPath();
        ctx9.arc(89, 102, 2, 0, Math.PI * 2, true);
        ctx9.fill();
    }

    var canvas10 = document.getElementById('canvas-move-path');
    if (canvas10.getContext) {
        var ctx10 = canvas10.getContext('2d');

        var rectangle = new Path2D();
        rectangle.rect(10, 10, 50, 50);

        var circle = new Path2D();
        circle.moveTo(125, 35);
        circle.arc(100, 35, 25, 0, 2 * Math.PI);

        ctx10.stroke(rectangle);
        ctx10.fill(circle);
    }
}

function roundedRect ( ctx, x, y, width, height, radius ) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo( x + width, y + height, x + width, y + height-radius, radius);
    ctx.lineTo(x + width, y + radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.lineTo(x + radius, y);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
}