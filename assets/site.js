// Highlight active nav item based on current page
(function() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".menu a[data-page]").forEach(a => {
    if (a.getAttribute("data-page") === path) a.classList.add("active");
  });
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
