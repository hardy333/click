const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const check = document.querySelector(".check");

let ctop = 200;
let cleft = 300;

const styles = getComputedStyle(container);
let startTop = Number(styles.getPropertyValue("top").slice(0, -2));
let startLeft = Number(styles.getPropertyValue("left").slice(0, -2));
let width = Number(styles.getPropertyValue("width").slice(0, -2));
let height = Number(styles.getPropertyValue("height").slice(0, -2));

console.log(width, height);

const moveBtn = (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  const rect = btn.getBoundingClientRect();

  let t = Number(styles.getPropertyValue("top").slice(0, -2));
  let l = Number(styles.getPropertyValue("left").slice(0, -2));

  if (y > height / 2) {
    console.log("hell");
    t -= 20;
    container.style.top = t + "px";
  } else if (y <= height / 2) {
    t += 20;
    container.style.top = t + "px";
  }

  if (x >= width / 2) {
    l -= 20;
    container.style.left = l + "px";
  } else if (x <= width / 2) {
    l += 20;
    container.style.left = l + "px";
  }

  if (l < 0) {
    container.style.left = window.innerWidth / 2 - 100 + "px";
    container.style.top = window.innerHeight / 2 - 100 + "px";
  }

  if (l > window.innerWidth - 100) {
    container.style.left = window.innerWidth / 2 - 100 + "px";
    container.style.top = window.innerHeight / 2 - 100 + "px";
  }

  if (t < -50) {
    container.style.left = window.innerWidth / 2 - 100 + "px";
    container.style.top = window.innerHeight / 2 - 100 + "px";
  }

  if (t > window.innerHeight - 50) {
    container.style.left = window.innerWidth / 2 - 100 + "px";
    container.style.top = window.innerHeight / 2 - 100 + "px";
  }

  console.log(y);
};

container.addEventListener("mousemove", moveBtn);

check.addEventListener("input", () => {
  console.log(check.checked);

  if (check.checked) {
    container.removeEventListener("mousemove", moveBtn);
  } else {
    container.addEventListener("mousemove", moveBtn);
  }
});

let confetti = new Confetti("btn");

btn.addEventListener("click", () => {
  // Pass in the id of an element

  console.log("Hello");
  // Edit given parameters
  confetti.setCount(75);
  confetti.setSize(1);
  confetti.setPower(25);
  confetti.setFade(false);
  confetti.destroyTarget(true);
});
