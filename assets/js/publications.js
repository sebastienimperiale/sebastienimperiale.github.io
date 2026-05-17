document.addEventListener("DOMContentLoaded", function () {
  const tags = document.querySelectorAll("#tagList .tag");
  const publications = document.querySelectorAll(".publication");

  tags.forEach(function (tag) {
    tag.addEventListener("click", function () {
      this.classList.toggle("active");
      var activeTags = Array.from(document.querySelectorAll("#tagList .tag.active"))
        .map(function (t) { return t.dataset.tag; });
      publications.forEach(function (pub) {
        if (activeTags.length === 0) {
          pub.style.display = "";
        } else {
          var pubTags = pub.dataset.tags ? pub.dataset.tags.split(",") : [];
          var matches = activeTags.every(function (tag) { return pubTags.includes(tag); });
          pub.style.display = matches ? "" : "none";
        }
      });
    });
  });
});
