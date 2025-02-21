function switchTheme(theme) {
  document
    .getElementById("themeStylesheet")
    .setAttribute("href", `assests/${theme}.css`);
  localStorage.setItem("selectedTheme", theme);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("selectedTheme") || "theme1";
  switchTheme(savedTheme);
});
