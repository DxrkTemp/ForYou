const screens = [
    "giftScreen",
    "openingScreen",
    "galleryScreen",
    "bouquetScreen",
    "messageScreen",
    "finalScreen"
];

function showScreen(id) {

    screens.forEach(screen => {
        document.getElementById(screen).classList.remove("active");
    });

    setTimeout(() => {
        document.getElementById(id).classList.add("active");
    }, 100);
}

document.getElementById("yesBtn").addEventListener("click", () => {

    showScreen("openingScreen");

    setTimeout(() => {
        showScreen("galleryScreen");
    }, 3000);

});

const noBtn = document.getElementById("noBtn");

function moveButton() {
    const padding = 15;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    noBtn.style.transition = "0.15s ease";
}

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("click", moveButton);

const buttons = document.querySelectorAll(".next-btn");

buttons[0].onclick = () => showScreen("bouquetScreen");
buttons[1].onclick = () => showScreen("messageScreen");
buttons[2].onclick = () => showScreen("finalScreen");

function createHeart() {

    const heart = document.createElement("div");
    heart.className = "heart";

    const hearts = ["❤", "💖", "💕", "💗", "💘"];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-20px";

    heart.style.fontSize = 15 + Math.random() * 20 + "px";
    heart.style.animationDuration = 5 + Math.random() * 4 + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 450);
