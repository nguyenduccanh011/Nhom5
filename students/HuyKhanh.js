document.addEventListener("DOMContentLoaded", function () {
  // Hiệu ứng typing effect
  const text = "🚀 Trần Liêu Huy Khánh - Backend Developer & AI Enthusiast";
  let i = 0;
  function typeEffect() {
    if (i < text.length) {
      document.querySelector(".typing-effect").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();

  // Hiệu ứng avatar lắc nhẹ khi hover
  const avatar = document.getElementById("avatar");
  avatar.addEventListener("mouseover", function () {
    avatar.style.transform = "rotate(5deg)";
  });
  avatar.addEventListener("mouseleave", function () {
    avatar.style.transform = "rotate(0deg)";
  });

  // Hiệu ứng background matrix animation
  let matrix = document.createElement("canvas");
  document.body.appendChild(matrix);
  let ctx = matrix.getContext("2d");
  matrix.width = window.innerWidth;
  matrix.height = window.innerHeight;
  let matrixChar = "010101 AI ML DATA".split("");
  let fontSize = 14;
  let columns = matrix.width / fontSize;
  let drops = [];
  for (let x = 0; x < columns; x++) drops[x] = 1;

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, matrix.width, matrix.height);
    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px Arial";
    for (let i = 0; i < drops.length; i++) {
      let text = matrixChar[Math.floor(Math.random() * matrixChar.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > matrix.height && Math.random() > 0.975)
        drops[i] = 0;
      drops[i]++;
    }
  }
  setInterval(drawMatrix, 50);
});
