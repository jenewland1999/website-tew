const TotalEngAndWeld = (function () {
  // Cache DOM
  const el = document.querySelector("#app");

  // Select the elements
  const navToggle = el.querySelector("#nav-toggle");
  const navElement = el.querySelector(".site-nav");
  const searchToggle = el.querySelector("#search-toggle");
  const searchElement = el.querySelector("#tew-search");
  const searchInput = searchElement.querySelector("#tew-search-box");
  const searchButton = searchElement.querySelector(".btn-search");
  const year = el.querySelector("#year");

  // Bind Events
  navToggle.addEventListener("click", toggleNav);
  searchToggle.addEventListener("click", toggleSearch);
  searchButton.addEventListener("click", search);

  // Render
  _render();

  function _render() {
    year.innerHTML = new Date().getFullYear();
  }

  function search(e) {
    e.preventDefault();
    window.location.href = `${window.location.protocol}//google.com/search?q=${searchInput.value} site:${window.location.hostname}`;
  }

  function toggleNav(e) {
    e.preventDefault();
    searchElement.classList.remove("open");
    navElement.classList.toggle("open");
  }

  function toggleSearch(e) {
    e.preventDefault();
    navElement.classList.remove("open");
    searchElement.classList.toggle("open");
  }

  return {
    toggleNav: toggleNav,
    toggleSearch: toggleSearch,
  };
})();
