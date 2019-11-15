function draw() {
    var ctx = document.getElementById('canvas-texts').getContext('2d');
    ctx.font = '48px serif';
    ctx.fillText('Hello world', 10, 50);

    var ctx2 = document.getElementById('canvas-stroketext').getContext('2d');
    ctx2.font = '48px serif';
    ctx2.strokeText('Hello world', 10, 50);

    var ctx3 = document.getElementById('canvas-textbaseline').getContext('2d');
    ctx3.font = '48px serif';
    ctx3.textBaseline = 'hanging';
    ctx3.strokeText('Hello world', 0, 100);

    var ctx4 = document.getElementById('canvas-textmeasurements').getContext('2d');
    var text = ctx4.measureText('foo'); // TextMetrics object
    console.log(text.width); //16

    var ctx5 = document.getElementById('canvas-linegraph').getContext('2d');
    var img = new Image();
    img.onload = function() {
        ctx5.drawImage(img, 0, 0);
        ctx5.beginPath();
        ctx5.moveTo(30, 96);
        ctx5.lineTo(70, 66);
        ctx5.lineTo(103, 76);
        ctx5.lineTo(170, 15);
        ctx5.stroke();
    }
    img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';

    var ctx6 = document.getElementById('canvas-scaling').getContext('2d');
    var img2 = new Image();
    img2.onload = function() {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                ctx6.drawImage(img2, j * 50, i * 38, 50, 38);
            }
        }
    };
    img2.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';

    var ctx7 = document.getElementById('canvas-slicing').getContext('2d');
    
}