const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const time = `${hours}:${minutes}:${seconds}`;

  clock.innerHTML = time;
};

setInterval(tick, 1000);
