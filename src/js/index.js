document.addEventListener("DOMContentLoaded", () => {
  const mobileButton = document.getElementById("mobile-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  });
  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
  });
});
