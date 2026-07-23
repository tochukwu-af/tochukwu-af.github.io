function updateTimestamp() {
  const timeElements = document.querySelectorAll(".timestamp");
  if (!timeElements.length) return;

  const now = new Date();

  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const year = now.getFullYear();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;

  const timezone = "EST";
  const formattedTime = `${month}/${day}/${year} ${hours}:${minutes}${ampm} ${timezone}`;

  timeElements.forEach((timeElement) => {
    timeElement.textContent = formattedTime;
  });
}

function handleActiveLinks() {
  const links = document.querySelectorAll(".menu a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

updateTimestamp();
handleActiveLinks();
setInterval(updateTimestamp, 1000 * 30);
