//Morning Meditations

const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");

function drawSun() { // Sun Outline
        ctx.beginPath();
        ctx.fillStyle = 'gold';
        ctx.arc(300, 300, 90, 0, Math.PI, true); // Sun Outline
        ctx.fill();
        ctx.stroke();
    }

drawSun();

function drawSun2() { // Inner Sun 
        ctx.beginPath();
        ctx.fillStyle = 'orange';
        ctx.arc(300, 300, 70, 0, Math.PI, true);
        ctx.fill();
        ctx.stroke();
}

drawSun2();

function drawRays() {
    ctx.beginPath();
    ctx.moveTo(0, 260);
    ctx.lineTo(212, 280);
    ctx.moveTo(0, 200);
    ctx.lineTo(220, 260);
    ctx.moveTo(0, 100);
    ctx.lineTo(234, 240);
    ctx.moveTo(0, 0);
    ctx.lineTo(250, 224);
    ctx.moveTo(110, 0);
    ctx.lineTo(275, 214);
    ctx.moveTo(200, 0);
    ctx.lineTo(296, 210);
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 210);
    ctx.moveTo(360, 0);
    ctx.lineTo(320, 212);
    ctx.moveTo(440, 0);
    ctx.lineTo(340, 220);
    ctx.moveTo(530, 0);
    ctx.lineTo(355, 230);
    ctx.moveTo(600, 20);
    ctx.lineTo(370, 245);
    ctx.moveTo(600, 100);
    ctx.lineTo(380, 260);
    ctx.moveTo(600, 200);
    ctx.lineTo(389, 280);
    ctx.stroke();
}

drawRays();