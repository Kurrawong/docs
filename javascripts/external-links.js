document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[href^='http']");

  links.forEach(link => {
    if (link.hostname !== window.location.hostname) {
      // Open in new tab
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");

      // Add icon (only if not already added)
      if (!link.classList.contains("external-link")) {
        link.classList.add("external-link");
      }
    }
  });
});