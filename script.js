const button = document.querySelector(".press-button");

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const getRandomGradient = () => {
  const colorStart = getRandomColor();
  const colorEnd = getRandomColor();
  const gradient = `linear-gradient(to right, ${colorStart}, ${colorEnd})`;
  return gradient;
};

if (button) {
  button.addEventListener("click", () => {
    const gradientButton = getRandomGradient();
    const gradientBody = getRandomGradient();
    button.style.backgroundImage = gradientButton;
    document.body.style.backgroundImage = gradientBody;
  });
}
