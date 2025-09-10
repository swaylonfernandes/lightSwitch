const toggleBtn = document.getElementById("theme-toggle");
const themeText = document.getElementById("theme-text");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeText.textContent = "Summon the Night";
} else {
  themeText.textContent = "Let there be Light";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeText.textContent = "Summon the Night";
    localStorage.setItem("theme", "dark");
  } else {
    themeText.textContent = "Let there be Light";
    localStorage.setItem("theme", "light");
  }
});
