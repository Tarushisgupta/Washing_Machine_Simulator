let powerOn = false;
let doorLocked = true;
let spinning = false;
let drum = document.getElementById('drum');
let clothes = document.getElementById('clothes');
let status = document.getElementById('status');
let led = document.querySelector('.led');
let doorBtn = document.getElementById('doorBtn');

document.getElementById('powerBtn').addEventListener('click', () => {
    powerOn = !powerOn;
    led.style.backgroundColor = powerOn ? 'red' : 'gray';
    status.innerText = powerOn ? 'Ready | Door: Locked' : 'Power Off';
});

document.getElementById('addClothesBtn').addEventListener('click', () => {
    if (!powerOn) {
        alert('Please turn on the power first!');
        return;
    }
    clothes.style.backgroundImage = "url('https://png.pngtree.com/png-clipart/20211024/original/pngtree-clothing-blue-cleaning-effect-advertisement-png-image_6871022.png')";
});

document.getElementById('startBtn').addEventListener('click', () => {
    if (!powerOn || !doorLocked) {
        alert('Please make sure power is ON and door is LOCKED!');
        return;
    }
    spinning = true;
    spinClothes();
});

document.getElementById('pauseBtn').addEventListener('click', () => {
    spinning = false;
    clothes.style.transform = 'rotate(0deg)';
});

document.getElementById('cancelBtn').addEventListener('click', () => {
    spinning = false;
    clothes.style.transform = 'rotate(0deg)';
    clothes.style.backgroundImage = 'none';
    status.innerText = 'Ready | Door: Locked';
});

doorBtn.addEventListener('click', () => {
    if (!spinning) {
        doorLocked = !doorLocked;
        status.innerText = `Ready | Door: ${doorLocked ? 'Locked' : 'Open'}`;
        doorBtn.innerText = doorLocked ? 'Open Door' : 'Close Door';
    } else {
        alert('Cannot open door while spinning!');
    }
});

function spinClothes() {
    let angle = 0;
    function rotate() {
        if (spinning) {
            angle = (angle + 5) % 360;
            clothes.style.transform = `rotate(${angle}deg)`;
            requestAnimationFrame(rotate);
        }
    }
    rotate();
}
