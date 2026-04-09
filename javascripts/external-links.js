function markExternalLinks() {
  const links = document.querySelectorAll("a[href^='http']");

  links.forEach(link => {
    if (link.hostname !== window.location.hostname) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
      link.classList.add("external-link");
    }
  });
}

if (typeof document$ !== "undefined") {
  document$.subscribe(markExternalLinks);
} else {
  document.addEventListener("DOMContentLoaded", markExternalLinks);
}