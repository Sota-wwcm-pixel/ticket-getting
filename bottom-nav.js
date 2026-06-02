document.addEventListener(
  "DOMContentLoaded",
  () => {

    const current =
      location.pathname;

    const activeClass =
      (page) =>
        current.includes(page)
          ? "active"
          : "";

    document.body.insertAdjacentHTML(
      "beforeend",
`
<nav class="bottom-nav">

  <a href="index.html"
     class="nav-item ${activeClass('index')}">

      <span class="nav-icon">
        🏠
      </span>

      Home
  </a>

  <a href="map.html"
     class="nav-item ${activeClass('map')}">

      <span class="nav-icon">
        🗺️
      </span>

      Map
  </a>

  <a href="ticket.get.html"
     class="nav-item ${activeClass('ticket')}">

      <span class="nav-icon">
        🎟️
      </span>

      Ticket
  </a>

  <a href="#"
     class="nav-item">

      <span class="nav-icon">
        ⭐
      </span>

      Saved
  </a>

  <a href="my.html"
     class="nav-item ${activeClass('my')}">

      <span class="nav-icon">
        👤
      </span>

      My
  </a>

</nav>
`
);

});
